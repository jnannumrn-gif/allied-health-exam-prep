import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { useAuth } from "../auth";
import config, { certifications } from "../config";
import { BookOpen, ClipboardList, Bot, Globe, Stethoscope, Pill, Droplets, Lock, Star, Zap } from "lucide-react";

const certIcons: Record<string, typeof Stethoscope> = {
  Stethoscope, Pill, Droplets,
};

export default function Landing() {
  const { t, lang } = useI18n();
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
    { icon: Bot, titleKey: "landing.feature3_title", descKey: "landing.feature3_desc" },
    { icon: Globe, titleKey: "landing.feature4_title", descKey: "landing.feature4_desc" },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
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
            {t("landing.hero_badge")}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t("landing.hero_title")}
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

      {/* Features */}
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

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            {t("landing.cert_section_title")}
          </h2>
          <p className="text-gray-400 text-center mb-10">
            {t("landing.cert_section_sub")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const Icon = certIcons[cert.icon] || Stethoscope;
              const isActive = cert.status === "active";
              return (
                <div
                  key={cert.id}
                  className={`relative bg-gray-900 border rounded-2xl p-6 transition-colors ${
                    isActive ? "border-gray-700 hover:border-gray-600" : "border-gray-800 opacity-70"
                  }`}
                >
                  {!isActive && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded-full">
                      <Lock size={12} />
                      {t("landing.coming_soon")}
                    </div>
                  )}
                  {isActive && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${cert.color}20`, color: cert.color }}>
                      <Star size={12} />
                      {t("landing.active")}
                    </div>
                  )}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <Icon size={28} color={cert.color} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {lang === "es" ? cert.nameEs : cert.name}
                  </h3>
                  <p className="text-sm font-mono text-gray-500 mb-2">{cert.examCode}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {lang === "es" ? cert.descriptionEs : cert.description}
                  </p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>{cert.examQuestions} {t("landing.questions")}</span>
                    <span>{cert.examMinutes} {t("landing.minutes")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Freemium Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            {t("landing.freemium_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{t("landing.freemium_free")}</h3>
              <p className="text-3xl font-bold text-white mb-1">$0</p>
              <p className="text-gray-400 text-sm mb-4">{t("landing.freemium_free_desc")}</p>
              <Link
                to="/register"
                className="block w-full py-2 rounded-lg border border-gray-700 text-gray-300 font-medium hover:bg-white/5 transition-colors"
              >
                {t("landing.cta_start")}
              </Link>
            </div>
            {/* Pro */}
            <div className="bg-gray-900 border-2 rounded-2xl p-6 text-center" style={{ borderColor: config.themeColor }}>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Zap size={16} style={{ color: config.themeColor }} />
                <h3 className="text-xl font-bold text-white">{t("landing.freemium_pro")}</h3>
              </div>
              <p className="text-3xl font-bold text-white mb-1">{t("landing.freemium_pro_price")}</p>
              <p className="text-gray-400 text-sm mb-4">{t("landing.freemium_pro_desc")}</p>
              <Link
                to="/register"
                className="block w-full py-2 rounded-lg text-white font-medium transition-transform hover:scale-105"
                style={{ backgroundColor: config.themeColor }}
              >
                {t("landing.cta_start")}
              </Link>
            </div>
            {/* Bundle */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{t("landing.freemium_bundle")}</h3>
              <p className="text-3xl font-bold text-white mb-1">{t("landing.freemium_bundle_price")}</p>
              <p className="text-gray-400 text-sm mb-4">{t("landing.freemium_bundle_desc")}</p>
              <Link
                to="/register"
                className="block w-full py-2 rounded-lg border border-gray-700 text-gray-300 font-medium hover:bg-white/5 transition-colors"
              >
                {t("landing.cta_start")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 px-4 text-center">
        <p className="text-gray-500 text-sm">
          Freelance Institute Tutoring &bull; Allied Health Exam Prep
        </p>
      </footer>
    </div>
  );
}
