import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useI18n } from "../i18n";
import config from "../config";
import api, { type Question, type AttemptResult } from "../api";
import { CheckCircle, XCircle, ArrowLeft } from "lucide-react";

interface AnsweredQuestion {
  question: Question;
  selected: string;
  correct: string;
  isCorrect: boolean;
  explanation: string;
}

export default function Practice() {
  const { t, lang } = useI18n();
  const [params] = useSearchParams();
  const [domain, setDomain] = useState(params.get("domain") || "");
  const [count, setCount] = useState(25);
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [answered, setAnswered] = useState<AnsweredQuestion[]>([]);
  const [currentResult, setCurrentResult] = useState<AttemptResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const startPractice = async () => {
    setLoading(true);
    try {
      const qs = await api.getRandomQuestions({ domain: domain || undefined, limit: count });
      const session = await api.createSession({
        session_type: "practice",
        domain: domain || null,
        total_questions: qs.length,
      });
      setQuestions(qs);
      setSessionId(session.id);
      setStarted(true);
      setCurrent(0);
      setAnswered([]);
      setCurrentResult(null);
      setFinished(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const selectAnswer = async (answer: string) => {
    if (currentResult) return;
    const q = questions[current];
    try {
      const result = await api.recordAttempt({
        question_id: q.id,
        selected_answer: answer,
        session_id: sessionId,
      });
      setCurrentResult(result);
      setAnswered((prev) => [
        ...prev,
        {
          question: q,
          selected: answer,
          correct: result.correct_answer,
          isCorrect: result.is_correct,
          explanation: result.explanation,
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  const nextQuestion = async () => {
    if (current + 1 >= questions.length) {
      const correctCount = answered.filter((a) => a.isCorrect).length;
      await api.updateSession(sessionId!, { correct_answers: correctCount, completed: 1 });
      setFinished(true);
    } else {
      setCurrent((p) => p + 1);
      setCurrentResult(null);
    }
  };

  const suffix = lang === "en" ? "_en" : "_es";

  if (!started) {
    return (
      <div className="min-h-screen bg-gray-950 px-4 py-8">
        <div className="max-w-lg mx-auto">
          <Link to="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-sm">
            <ArrowLeft size={16} /> {t("common.back")}
          </Link>
          <h1 className="text-2xl font-bold text-white mb-6">{t("practice.title")}</h1>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t("practice.select_domain")}</label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">{t("domain.all")}</option>
                {config.domains.map((d) => (
                  <option key={d} value={d}>{t(`domain.${d}`)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">{t("practice.select_count")}</label>
              <select
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                {[10, 25, 50].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <button
              onClick={startPractice}
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold transition-opacity disabled:opacity-50"
              style={{ backgroundColor: config.themeColor }}
            >
              {loading ? t("common.loading") : t("practice.start")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const correctCount = answered.filter((a) => a.isCorrect).length;
    const score = Math.round((correctCount / answered.length) * 100);
    const incorrect = answered.filter((a) => !a.isCorrect);
    const domainScores: Record<string, { total: number; correct: number }> = {};
    answered.forEach((a) => {
      const d = a.question.domain;
      if (!domainScores[d]) domainScores[d] = { total: 0, correct: 0 };
      domainScores[d].total++;
      if (a.isCorrect) domainScores[d].correct++;
    });

    return (
      <div className="min-h-screen bg-gray-950 px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-white mb-2">{t("practice.results_title")}</h1>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-4">
            <p className="text-gray-400 text-sm">{t("practice.score")}</p>
            <p className="text-4xl font-bold text-white">{score}%</p>
            <p className="text-gray-400 text-sm">{correctCount}/{answered.length}</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-4">
            <h3 className="text-white font-semibold mb-3">{t("practice.by_domain")}</h3>
            {Object.entries(domainScores).map(([d, s]) => (
              <div key={d} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                <span className="text-gray-300 text-sm">{t(`domain.${d}`)}</span>
                <span className="text-gray-400 text-sm">{Math.round((s.correct / s.total) * 100)}%</span>
              </div>
            ))}
          </div>

          {incorrect.length > 0 && (
            <button
              onClick={() => setShowReview(!showReview)}
              className="w-full py-3 rounded-xl text-white font-semibold border border-gray-700 hover:bg-white/5 transition-colors mb-4"
            >
              {t("practice.incorrect_review")} ({incorrect.length})
            </button>
          )}

          {showReview && incorrect.map((a, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-3">
              <p className="text-white text-sm mb-2">
                {(a.question as unknown as Record<string, string>)[`question${suffix}`]}
              </p>
              <p className="text-red-400 text-sm">
                {t("practice.incorrect")}: {a.selected}
              </p>
              <p className="text-green-400 text-sm">
                {t("practice.correct")}: {a.correct}
              </p>
              <p className="text-gray-400 text-sm mt-2">{a.explanation}</p>
            </div>
          ))}

          <div className="flex gap-3">
            <button
              onClick={() => { setStarted(false); setFinished(false); }}
              className="flex-1 py-3 rounded-xl text-white font-semibold"
              style={{ backgroundColor: config.themeColor }}
            >
              {t("practice.again")}
            </button>
            <Link
              to="/dashboard"
              className="flex-1 py-3 rounded-xl text-white font-semibold border border-gray-700 text-center hover:bg-white/5 transition-colors"
            >
              {t("practice.go_dashboard")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const options = ["A", "B", "C", "D"];

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-400 text-sm">
            {t("practice.question")} {current + 1} {t("practice.of")} {questions.length}
          </span>
          <span className="text-xs px-2 py-1 rounded-full text-gray-300" style={{ backgroundColor: `${config.themeColor}30` }}>
            {t(`domain.${q.domain}`)}
          </span>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-1 mb-6">
          <div
            className="h-1 rounded-full transition-all"
            style={{ width: `${((current + 1) / questions.length) * 100}%`, backgroundColor: config.themeColor }}
          />
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-4">
          <p className="text-white leading-relaxed">
            {(q as unknown as Record<string, string>)[`question${suffix}`]}
          </p>
        </div>

        <div className="space-y-3 mb-4">
          {options.map((opt) => {
            const text = (q as unknown as Record<string, string>)[`option_${opt.toLowerCase()}${suffix}`];
            const isSelected = currentResult && answered[answered.length - 1]?.selected === opt;
            const isCorrect = currentResult?.correct_answer === opt;
            let borderColor = "border-gray-800";
            let bgColor = "bg-gray-900";
            if (currentResult) {
              if (isCorrect) { borderColor = "border-green-500"; bgColor = "bg-green-500/10"; }
              else if (isSelected) { borderColor = "border-red-500"; bgColor = "bg-red-500/10"; }
            }
            return (
              <button
                key={opt}
                onClick={() => selectAnswer(opt)}
                disabled={!!currentResult}
                className={`w-full text-left ${bgColor} border ${borderColor} rounded-xl p-4 transition-colors hover:border-gray-600 disabled:hover:border-gray-800 flex items-center gap-3`}
              >
                <span className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 font-medium text-sm shrink-0">
                  {opt}
                </span>
                <span className="text-gray-200 text-sm">{text}</span>
                {currentResult && isCorrect && <CheckCircle size={18} className="text-green-400 ml-auto shrink-0" />}
                {currentResult && isSelected && !isCorrect && <XCircle size={18} className="text-red-400 ml-auto shrink-0" />}
              </button>
            );
          })}
        </div>

        {currentResult && (
          <div className={`rounded-xl p-4 mb-4 ${currentResult.is_correct ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
            <p className={`font-semibold text-sm mb-1 ${currentResult.is_correct ? "text-green-400" : "text-red-400"}`}>
              {currentResult.is_correct ? t("practice.correct") : t("practice.incorrect")}
            </p>
            <p className="text-gray-300 text-sm">{t("practice.explanation")}: {currentResult.explanation}</p>
          </div>
        )}

        {currentResult && (
          <button
            onClick={nextQuestion}
            className="w-full py-3 rounded-xl text-white font-semibold"
            style={{ backgroundColor: config.themeColor }}
          >
            {current + 1 >= questions.length ? t("practice.results_title") : t("practice.next")}
          </button>
        )}
      </div>
    </div>
  );
}
