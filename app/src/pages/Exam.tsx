import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { useAuth } from "../auth";
import config, { certifications } from "../config";
import api, { type Question } from "../api";
import { ArrowLeft, Flag, Clock } from "lucide-react";

interface ExamAnswer {
  questionId: string;
  selected: string | null;
  correct: string;
  isCorrect: boolean;
  flagged: boolean;
}

export default function Exam() {
  const { t, lang } = useI18n();
  const { user } = useAuth();
  const cert = useMemo(() => {
    const userCert = user?.certification || "medical_assisting";
    return certifications.find((c) => c.id === userCert) || certifications[0];
  }, [user?.certification]);
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<ExamAnswer[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const answersRef = useRef<ExamAnswer[]>([]);
  const sessionIdRef = useRef<string | null>(null);

  const totalQuestions = Math.min(config.examQuestions, cert.examQuestions);
  const examMinutes = cert.examMinutes;

  const submitExam = useCallback(async () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setLoading(true);
    try {
      const currentAnswers = answersRef.current;
      const currentSessionId = sessionIdRef.current;
      let correctCount = 0;
      for (const a of currentAnswers) {
        if (a.selected) {
          const result = await api.recordAttempt({
            question_id: a.questionId,
            selected_answer: a.selected,
            session_id: currentSessionId,
          });
          a.correct = result.correct_answer;
          a.isCorrect = result.is_correct;
          if (result.is_correct) correctCount++;
        }
      }
      await api.updateSession(currentSessionId!, { correct_answers: correctCount, completed: 1 });
      setAnswers([...currentAnswers]);
      setFinished(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  useEffect(() => {
    if (started && timeLeft > 0 && !finished) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            submitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }
  }, [started, finished, submitExam]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    sessionIdRef.current = sessionId;
  }, [sessionId]);

  const startExam = async () => {
    setLoading(true);
    try {
      const qs = await api.getRandomQuestions({ domain: cert.id, limit: totalQuestions });
      const session = await api.createSession({
        session_type: "exam",
        total_questions: qs.length,
      });
      const initialAnswers = qs.map((q) => ({ questionId: q.id, selected: null, correct: "", isCorrect: false, flagged: false }));
      setQuestions(qs);
      setSessionId(session.id);
      setAnswers(initialAnswers);
      setTimeLeft(examMinutes * 60);
      setStarted(true);
      setCurrent(0);
      setFinished(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const selectAnswer = (option: string) => {
    setAnswers((prev) =>
      prev.map((a, i) => (i === current ? { ...a, selected: option } : a))
    );
  };

  const toggleFlag = () => {
    setAnswers((prev) =>
      prev.map((a, i) => (i === current ? { ...a, flagged: !a.flagged } : a))
    );
  };

  const confirmSubmit = () => {
    if (window.confirm(t("exam.confirm_submit"))) {
      submitExam();
    }
  };

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const suffix = lang === "en" ? "_en" : "_es";

  if (!started) {
    return (
      <div className="min-h-screen bg-gray-950 px-4 py-8">
        <div className="max-w-lg mx-auto">
          <Link to="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-sm">
            <ArrowLeft size={16} /> {t("common.back")}
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">{t("exam.title")}</h1>
          <p className="text-gray-400 mb-8">{t("exam.description")}</p>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
            <Clock size={48} className="mx-auto mb-4" style={{ color: cert.color }} />
            <p className="text-xs font-mono mb-2 px-2 py-1 rounded-full inline-block" style={{ backgroundColor: `${cert.color}20`, color: cert.color }}>
              {cert.examCode}
            </p>
            <p className="text-gray-300 mb-6">
              {totalQuestions} {lang === "en" ? "questions" : "preguntas"} &bull; {examMinutes} min
            </p>
            <button
              onClick={startExam}
              disabled={loading}
              className="px-8 py-3 rounded-xl text-white font-semibold transition-opacity disabled:opacity-50"
              style={{ backgroundColor: config.themeColor }}
            >
              {loading ? t("common.loading") : t("exam.start")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const answeredCount = answers.filter((a) => a.selected).length;
    const correctCount = answers.filter((a) => a.isCorrect).length;
    const score = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const passed = score >= 65;
    const timeTaken = examMinutes * 60 - timeLeft;

    return (
      <div className="min-h-screen bg-gray-950 px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">{t("exam.results_title")}</h1>

          <div className={`rounded-2xl p-6 mb-4 border ${passed ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"}`}>
            <p className={`text-2xl font-bold ${passed ? "text-green-400" : "text-red-400"}`}>
              {passed ? t("exam.passed") : t("exam.failed")}
            </p>
            <p className="text-4xl font-bold text-white mt-2">{score}%</p>
            <p className="text-gray-400 text-sm mt-1">{correctCount}/{answeredCount}</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">{t("exam.time_taken")}</span>
              <span className="text-white">{formatTime(timeTaken)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">{t("exam.pass_score")}</span>
              <span className="text-white">65%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">{t("exam.answered")}</span>
              <span className="text-white">{answeredCount}/{totalQuestions}</span>
            </div>
          </div>

          <Link
            to="/dashboard"
            className="block w-full py-3 rounded-xl text-white font-semibold text-center"
            style={{ backgroundColor: config.themeColor }}
          >
            {t("practice.go_dashboard")}
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const a = answers[current];
  const answeredCount = answers.filter((x) => x.selected).length;
  const flaggedCount = answers.filter((x) => x.flagged).length;

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-400">
              {t("exam.question")} {current + 1}/{totalQuestions}
            </span>
            <span className="text-green-400">{t("exam.answered")}: {answeredCount}</span>
            {flaggedCount > 0 && <span className="text-yellow-400">{t("exam.flagged")}: {flaggedCount}</span>}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock size={14} className={timeLeft < 300 ? "text-red-400" : "text-gray-400"} />
            <span className={timeLeft < 300 ? "text-red-400 font-mono" : "text-gray-400 font-mono"}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-1 mb-4">
          <div
            className="h-1 rounded-full transition-all"
            style={{ width: `${((current + 1) / totalQuestions) * 100}%`, backgroundColor: config.themeColor }}
          />
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-4">
          <p className="text-white leading-relaxed">
            {(q as unknown as Record<string, string>)[`question${suffix}`]}
          </p>
        </div>

        <div className="space-y-3 mb-4">
          {["A", "B", "C", "D"].map((opt) => {
            const text = (q as unknown as Record<string, string>)[`option_${opt.toLowerCase()}${suffix}`];
            const isSelected = a.selected === opt;
            return (
              <button
                key={opt}
                onClick={() => selectAnswer(opt)}
                className={`w-full text-left bg-gray-900 border ${isSelected ? "border-blue-500 bg-blue-500/10" : "border-gray-800 hover:border-gray-600"} rounded-xl p-4 flex items-center gap-3 transition-colors`}
              >
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium text-sm shrink-0 ${isSelected ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-400"}`}>
                  {opt}
                </span>
                <span className="text-gray-200 text-sm">{text}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleFlag}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm border transition-colors ${a.flagged ? "border-yellow-500 text-yellow-400 bg-yellow-500/10" : "border-gray-700 text-gray-400 hover:text-white"}`}
          >
            <Flag size={14} />
            {a.flagged ? t("exam.unflag") : t("exam.flag")}
          </button>
          <div className="flex-1" />
          {current > 0 && (
            <button onClick={() => setCurrent((p) => p - 1)} className="px-4 py-2 rounded-xl text-sm border border-gray-700 text-gray-400 hover:text-white transition-colors">
              {t("common.back")}
            </button>
          )}
          {current < totalQuestions - 1 ? (
            <button
              onClick={() => setCurrent((p) => p + 1)}
              className="px-4 py-2 rounded-xl text-sm text-white font-medium"
              style={{ backgroundColor: config.themeColor }}
            >
              {t("practice.next")}
            </button>
          ) : (
            <button
              onClick={confirmSubmit}
              disabled={loading}
              className="px-6 py-2 rounded-xl text-sm text-white font-medium bg-green-600 hover:bg-green-700 disabled:opacity-50 transition-colors"
            >
              {loading ? t("common.loading") : t("exam.submit")}
            </button>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-1">
          {answers.map((ans, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-8 h-8 rounded text-xs font-medium transition-colors ${
                i === current
                  ? "bg-blue-500 text-white"
                  : ans.flagged
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                  : ans.selected
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800 text-gray-500"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
