import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import config from "../config";
import api, { type UserStats } from "../api";
import { ArrowLeft } from "lucide-react";

export default function Stats() {
  const { t } = useI18n();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getStats().then(setStats).catch(console.error).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-gray-400">{t("common.loading")}</p>
      </div>
    );
  }

  if (!stats || stats.total_questions === 0) {
    return (
      <div className="min-h-screen bg-gray-950 px-4 py-8">
        <div className="max-w-lg mx-auto">
          <Link to="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-sm">
            <ArrowLeft size={16} /> {t("common.back")}
          </Link>
          <h1 className="text-2xl font-bold text-white mb-4">{t("stats.title")}</h1>
          <p className="text-gray-400 text-center py-12">{t("stats.no_data")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="max-w-lg mx-auto">
        <Link to="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-sm">
          <ArrowLeft size={16} /> {t("common.back")}
        </Link>
        <h1 className="text-2xl font-bold text-white mb-6">{t("stats.title")}</h1>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold text-white">{stats.total_questions}</p>
            <p className="text-gray-400 text-sm">{t("stats.total_questions")}</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold text-white">{stats.overall_accuracy}%</p>
            <p className="text-gray-400 text-sm">{t("stats.overall_accuracy")}</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
          <h3 className="text-white font-semibold mb-4">{t("stats.by_domain")}</h3>
          <div className="space-y-4">
            {stats.domain_stats.map((ds) => (
              <div key={ds.domain}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-300 text-sm">{t(`domain.${ds.domain}`)}</span>
                  <span className="text-gray-400 text-sm">{ds.accuracy}% ({ds.correct}/{ds.total})</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${ds.accuracy}%`, backgroundColor: config.themeColor }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {stats.recent_sessions.length > 0 && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4">{t("stats.recent_sessions")}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left text-gray-400 pb-2">{t("stats.session_type")}</th>
                    <th className="text-left text-gray-400 pb-2">{t("stats.session_score")}</th>
                    <th className="text-left text-gray-400 pb-2">{t("stats.session_date")}</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recent_sessions.map((s) => (
                    <tr key={s.id} className="border-b border-gray-800 last:border-0">
                      <td className="py-2 text-gray-300 capitalize">{s.session_type}</td>
                      <td className="py-2 text-gray-300">
                        {s.total_questions > 0
                          ? `${Math.round((s.correct_answers / s.total_questions) * 100)}%`
                          : "-"}
                      </td>
                      <td className="py-2 text-gray-400">{new Date(s.started_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
