import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { useAuth } from "../auth";
import config from "../config";
import api from "../api";
import { ArrowLeft } from "lucide-react";

export default function Settings() {
  const { t, lang, setLang } = useI18n();
  const { user, logout, updateUser } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [examDate, setExamDate] = useState(user?.exam_date || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      const data: Record<string, string | null> = {};
      if (name !== user?.name) data.name = name;
      if (lang !== user?.language) data.language = lang;
      if (examDate !== (user?.exam_date || "")) data.exam_date = examDate || null;
      if (currentPassword && newPassword) {
        data.current_password = currentPassword;
        data.password = newPassword;
      }
      const updated = await api.updateMe(data);
      updateUser(updated);
      setCurrentPassword("");
      setNewPassword("");
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="max-w-lg mx-auto">
        <Link to="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-sm">
          <ArrowLeft size={16} /> {t("common.back")}
        </Link>
        <h1 className="text-2xl font-bold text-white mb-6">{t("settings.title")}</h1>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}
          {saved && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl text-sm">
              {t("settings.saved")}
            </div>
          )}

          <div>
            <label className="block text-sm text-gray-400 mb-1">{t("settings.language")}</label>
            <div className="flex gap-2">
              <button
                onClick={() => setLang("es")}
                className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-colors ${
                  lang === "es" ? "border-blue-500 text-white bg-blue-500/10" : "border-gray-700 text-gray-400"
                }`}
              >
                Espanol
              </button>
              <button
                onClick={() => setLang("en")}
                className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-colors ${
                  lang === "en" ? "border-blue-500 text-white bg-blue-500/10" : "border-gray-700 text-gray-400"
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">{t("settings.update_name")}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">{t("settings.exam_date")}</label>
            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <hr className="border-gray-800" />

          <div>
            <label className="block text-sm text-gray-400 mb-1">{t("settings.current_password")}</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">{t("settings.new_password")}</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full py-3 rounded-xl text-white font-semibold transition-opacity disabled:opacity-50"
            style={{ backgroundColor: config.themeColor }}
          >
            {saving ? t("common.loading") : t("settings.save")}
          </button>

          <button
            onClick={logout}
            className="w-full py-3 rounded-xl text-red-400 font-semibold border border-red-500/30 hover:bg-red-500/10 transition-colors"
          >
            {t("settings.logout")}
          </button>
        </div>
      </div>
    </div>
  );
}
