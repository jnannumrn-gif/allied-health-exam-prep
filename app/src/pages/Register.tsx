import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useI18n } from "../i18n";
import { useAuth } from "../auth";
import config, { certifications } from "../config";
import { Stethoscope, Pill, Droplets, HeartPulse, Lock, ChevronRight, ChevronLeft } from "lucide-react";

const certIcons: Record<string, typeof Stethoscope> = {
  Stethoscope, Pill, Droplets, HeartPulse,
};

export default function Register() {
  const { t, lang } = useI18n();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [certification, setCertification] = useState("medical_assisting");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [examDate, setExamDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      await register({
        email,
        password,
        name,
        language: lang,
        exam_date: examDate || null,
        certification,
      });
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
      setStep(2);
    } finally {
      setLoading(false);
    }
  };

  const stepTitles = [
    { title: t("onboard.step1_title"), sub: t("onboard.step1_sub") },
    { title: t("onboard.step2_title"), sub: t("onboard.step2_sub") },
    { title: t("onboard.step3_title"), sub: t("onboard.step3_sub") },
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Allied Health Exam Prep" className="w-16 h-16 rounded-2xl mx-auto mb-4 object-contain" />
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all ${
                  s === step ? "w-8" : "w-2"
                }`}
                style={{ backgroundColor: s <= step ? config.themeColor : "#374151" }}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mb-2">
            {t("onboard.step")} {step} {t("onboard.of")} 3
          </p>
          <h1 className="text-2xl font-bold text-white">{stepTitles[step - 1].title}</h1>
          <p className="text-gray-400 mt-1">{stepTitles[step - 1].sub}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm mb-4">
              {error}
            </div>
          )}

          {/* Step 1: Choose Certification */}
          {step === 1 && (
            <div className="space-y-3">
              {certifications.map((cert) => {
                const Icon = certIcons[cert.icon] || Stethoscope;
                const isActive = cert.status === "active";
                const isSelected = certification === cert.id;
                return (
                  <button
                    key={cert.id}
                    onClick={() => isActive && setCertification(cert.id)}
                    disabled={!isActive}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                      isSelected && isActive
                        ? "border-2"
                        : isActive
                        ? "border-gray-700 hover:border-gray-600"
                        : "border-gray-800 opacity-50 cursor-not-allowed"
                    }`}
                    style={isSelected && isActive ? { borderColor: cert.color } : {}}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${cert.color}20` }}
                    >
                      <Icon size={24} color={cert.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">
                          {lang === "es" ? cert.nameEs : cert.name}
                        </span>
                        {!isActive && (
                          <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
                            <Lock size={10} />
                            {t("landing.coming_soon")}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 font-mono">{cert.examCode}</p>
                    </div>
                    {isSelected && isActive && (
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: cert.color }}>
                        <span className="text-white text-xs">&#10003;</span>
                      </div>
                    )}
                  </button>
                );
              })}
              <button
                onClick={() => setStep(2)}
                className="w-full mt-4 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: config.themeColor }}
              >
                {t("onboard.next")} <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Step 2: Account Info */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">{t("auth.name")}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">{t("auth.email")}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">{t("auth.password")}</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-xl text-gray-300 font-semibold border border-gray-700 hover:bg-white/5 flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={18} /> {t("onboard.back")}
                </button>
                <button
                  onClick={() => {
                    if (!name || !email || !password) {
                      setError("Please fill in all fields");
                      return;
                    }
                    setError("");
                    setStep(3);
                  }}
                  className="flex-1 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: config.themeColor }}
                >
                  {t("onboard.next")} <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Exam Date */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">{t("auth.exam_date")}</label>
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 rounded-xl text-gray-300 font-semibold border border-gray-700 hover:bg-white/5 flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={18} /> {t("onboard.back")}
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] disabled:opacity-50"
                  style={{ backgroundColor: config.themeColor }}
                >
                  {loading ? t("common.loading") : t("onboard.start_studying")}
                </button>
              </div>
              <button
                onClick={() => {
                  setExamDate("");
                  handleSubmit();
                }}
                disabled={loading}
                className="w-full text-center text-sm text-gray-500 hover:text-gray-400 transition-colors disabled:opacity-50"
              >
                {t("onboard.skip_date")}
              </button>
            </div>
          )}

          <p className="text-center text-sm text-gray-400 mt-4">
            {t("auth.has_account")}{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              {t("auth.login_link")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
