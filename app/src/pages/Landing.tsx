import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { useAuth } from "../auth";
import config from "../config";
import { BookOpen, ClipboardList, Layers, Globe } from "lucide-react";

export default function Landing() {
  const { t } = useI18n();
  const { user } = useAuth();

  if (user) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <Link to="/dashboard" className="text-white underline">
          Go to Dashboard
        </Link>
      </div>
    );
  }

  const features = [
    { icon: BookOpen, titleKey: "landing.feature1_title", descKey: "landing.feature1_desc" },
    { icon: ClipboardList, titleKey: "landing.feature2_title", descKey: "landing.feature2_desc" },
    { icon: Layers, titleKey: "landing.feature3_title", descKey: "landing.feature3_desc" },
    { icon: Globe, titleKey: "landing.feature4_title", descKey: "landing.feature4_desc" },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative overflow-hidden py-20 px-4">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${config.themeColor}, transparent 70%)`,
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <img src="/logo.png" alt="Allied Health Exam Prep" className="w-20 h-20 mx-auto mb-6 rounded-2xl object-contain" />
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white mb-6"
            style={{ backgroundColor: `${config.themeColor}30` }}
          >
            {config.examCode}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {config.examName}
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {t("landing.tagline")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3 rounded-xl text-white font-semibold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: config.themeColor }}
            >
              {t("landing.cta_start")}
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 rounded-xl text-gray-300 font-semibold text-lg border border-gray-700 hover:bg-white/5 transition-colors"
            >
              {t("landing.cta_login")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${config.themeColor}20` }}
              >
                <f.icon size={24} style={{ color: config.themeColor }} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {t(f.titleKey)}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t(f.descKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 px-4 text-center">
        <p className="text-gray-500 text-sm">
          Freelance Institute Tutoring &bull; {config.examName}
        </p>
      </footer>
    </div>
  );
}
