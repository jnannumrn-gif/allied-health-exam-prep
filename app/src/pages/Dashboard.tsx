import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { useAuth } from "../auth";
import config, { certifications } from "../config";
import api, { type UserStats } from "../api";
import { BookOpen, ClipboardList, Layers, BarChart3, Flame, Bot, Calendar, Zap } from "lucide-react";

export default function Dashboard() {
  const { t, lang } = useI18n();
  const { user } = useAuth();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getStats().then(setStats).catch(console.error).finally(() => setLoading(false));
  }, []);

  const cert = useMemo(() => {
    const userCert = user?.certification || "medical_assisting";
    return certifications.find((c) => c.id === userCert) || certifications[0];
  }, [user?.certification]);

  const readiness = stats
    ? Math.min(100, Math.round((stats.overall_accuracy * 0.7 + Math.min(stats.total_questions, 200) / 200 * 30)))
    : 0;

  const daysUntilExam = useMemo(() => {
    if (!user?.exam_date) return null;
    const diff = Math.ceil((new Date(user.exam_date).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : null;
  }, [user?.exam_date]);

  const freeQuestionsUsed = stats?.total_questions ?? 0;
  const freeQuestionsLeft = Math.max(0, config.freemium.freeQuestions - freeQuestionsUsed);

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with certification badge */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">
            {user?.name ? `${user.name.split(" ")[0]}!` : "Dashboard"}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span
              className="text-xs px-2 py-1 rounded-full font-medium"
              style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
            >
              {cert.examCode}
            </span>
            <span className="text-gray-400 text-sm">
              {lang === "es" ? cert.nameEs : cert.name}
            </span>
          </div>
        </div>

        {/* Exam countdown + Readiness + Streak */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Exam Countdown */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center">
            <Calendar size={28} style={{ color: cert.color }} className="mb-2" />
            <p className="text-gray-400 text-sm">{t("dash.exam_countdown")}</p>
            {daysUntilExam !== null ? (
              <p className="text-3xl font-bold text-white my-1">{daysUntilExam}</p>
            ) : (
              <p className="text-sm text-gray-500 my-1 text-center">{t("dash.no_exam_date")}</p>
            )}
          </div>

          {/* Readiness */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-gray-400 text-sm mb-3 text-center">{t("dash.readiness")}</h3>
            <div className="relative w-24 h-24 mx-auto mb-3">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#374151" strokeWidth="8" />
                <circle
                  cx="50" cy="50" r="42" fill="none"
                  stroke={cert.color}
                  strokeWidth="8"
                  strokeDasharray={`${readiness * 2.64} 264`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{loading ? "..." : `${readiness}%`}</span>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm">
              {stats?.total_questions ?? 0} {t("dash.questions_answered")}
            </p>
          </div>

          {/* Streak */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center">
            <Flame size={32} className="text-orange-400 mb-2" />
            <p className="text-gray-400 text-sm">{t("dash.streak")}</p>
            <p className="text-3xl font-bold text-white my-1">{stats?.streak ?? 0}</p>
            <p className="text-gray-500 text-sm">{t("dash.days")} — {t("dash.streak_msg")}</p>
          </div>
        </div>

        {/* Freemium Banner */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap size={20} style={{ color: cert.color }} />
            <div>
              <p className="text-white text-sm font-medium">
                {freeQuestionsLeft} {t("dash.free_questions_left")}
              </p>
              <p className="text-gray-500 text-xs">{t("dash.upgrade_desc")}</p>
            </div>
          </div>
          <button
            className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-transform hover:scale-105"
            style={{ backgroundColor: cert.color }}
          >
            {t("dash.upgrade_cta")}
          </button>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {[
            { to: "/practice", icon: BookOpen, label: t("dash.practice_now") },
            { to: "/exam", icon: ClipboardList, label: t("dash.full_exam") },
            { to: "/flashcards", icon: Layers, label: t("dash.flashcards") },
            { to: "/tutor", icon: Bot, label: t("nav.tutor") },
            { to: "/stats", icon: BarChart3, label: t("dash.my_stats") },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-gray-700 transition-colors"
            >
              <item.icon size={24} style={{ color: cert.color }} />
              <span className="text-white text-sm text-center">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Topic Performance */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">{t("dash.domains_title")}</h3>
          <div className="space-y-3">
            {config.domains.map((domain) => {
              const ds = stats?.domain_stats.find((d) => d.domain === domain);
              const accuracy = ds?.accuracy ?? 0;
              return (
                <Link
                  key={domain}
                  to={`/practice?domain=${domain}`}
                  className="block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-300 text-sm">{t(`domain.${domain}`)}</span>
                    <span className="text-gray-400 text-sm">{accuracy}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{ width: `${accuracy}%`, backgroundColor: cert.color }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
