import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { useAuth } from "../auth";
import config from "../config";
import api, { type UserStats } from "../api";
import { BookOpen, ClipboardList, Layers, BarChart3, Flame } from "lucide-react";

export default function Dashboard() {
  const { t } = useI18n();
  const { user } = useAuth();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getStats().then(setStats).catch(console.error).finally(() => setLoading(false));
  }, []);

  const readiness = stats
    ? Math.min(100, Math.round((stats.overall_accuracy * 0.7 + Math.min(stats.total_questions, 200) / 200 * 30)))
    : 0;

  const domains = config.domains;

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">
            {user?.name ? `${user.name.split(" ")[0]}!` : "Dashboard"}
          </h1>
          <p className="text-gray-400 text-sm mt-1">{config.examCode} {t("nav.dashboard")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-gray-400 text-sm mb-3">{t("dash.readiness")}</h3>
            <div className="relative w-24 h-24 mx-auto mb-3">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#374151" strokeWidth="8" />
                <circle
                  cx="50" cy="50" r="42" fill="none"
                  stroke={config.themeColor}
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

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center">
            <Flame size={32} className="text-orange-400 mb-2" />
            <p className="text-gray-400 text-sm">{t("dash.streak")}</p>
            <p className="text-3xl font-bold text-white my-1">{stats?.streak ?? 0}</p>
            <p className="text-gray-500 text-sm">{t("dash.days")} — {t("dash.streak_msg")}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { to: "/practice", icon: BookOpen, label: t("dash.practice_now") },
            { to: "/exam", icon: ClipboardList, label: t("dash.full_exam") },
            { to: "/flashcards", icon: Layers, label: t("dash.flashcards") },
            { to: "/stats", icon: BarChart3, label: t("dash.my_stats") },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-gray-700 transition-colors"
            >
              <item.icon size={24} style={{ color: config.themeColor }} />
              <span className="text-white text-sm text-center">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">{t("dash.domains_title")}</h3>
          <div className="space-y-3">
            {domains.map((domain) => {
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
                      style={{ width: `${accuracy}%`, backgroundColor: config.themeColor }}
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
