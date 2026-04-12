import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import config from "../config";
import api, { type Flashcard } from "../api";
import { ArrowLeft, RotateCcw } from "lucide-react";

export default function Flashcards() {
  const { t, lang } = useI18n();
  const [domain, setDomain] = useState("");
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getFlashcards(domain || undefined)
      .then((data) => { setCards(data); setCurrent(0); setFlipped(false); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [domain]);

  const markCard = async (status: string) => {
    const card = cards[current];
    try {
      await api.updateFlashcardProgress(card.id, status);
      setCards((prev) => prev.map((c) => (c.id === card.id ? { ...c, status: status as Flashcard["status"] } : c)));
    } catch (err) {
      console.error(err);
    }
    setFlipped(false);
    if (current + 1 < cards.length) {
      setCurrent((p) => p + 1);
    } else {
      setCurrent(0);
    }
  };

  const suffix = lang === "en" ? "_en" : "_es";
  const newCount = cards.filter((c) => c.status === "new").length;
  const learningCount = cards.filter((c) => c.status === "learning").length;
  const masteredCount = cards.filter((c) => c.status === "mastered").length;

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="max-w-lg mx-auto">
        <Link to="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-sm">
          <ArrowLeft size={16} /> {t("common.back")}
        </Link>
        <h1 className="text-2xl font-bold text-white mb-4">{t("flash.title")}</h1>

        <div className="mb-4">
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

        <div className="flex gap-3 mb-6">
          <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-blue-400">{newCount}</p>
            <p className="text-xs text-gray-400">{t("flash.new")}</p>
          </div>
          <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-yellow-400">{learningCount}</p>
            <p className="text-xs text-gray-400">{t("flash.learning")}</p>
          </div>
          <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-green-400">{masteredCount}</p>
            <p className="text-xs text-gray-400">{t("flash.mastered")}</p>
          </div>
        </div>

        {loading ? (
          <p className="text-gray-400 text-center py-12">{t("common.loading")}</p>
        ) : cards.length === 0 ? (
          <p className="text-gray-400 text-center py-12">{t("stats.no_data")}</p>
        ) : (
          <>
            <p className="text-gray-400 text-sm mb-3 text-center">
              {t("flash.card")} {current + 1} / {cards.length}
            </p>

            <button
              onClick={() => setFlipped(!flipped)}
              className="w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 min-h-48 flex flex-col items-center justify-center cursor-pointer hover:border-gray-700 transition-all mb-4"
            >
              <p className="text-white text-lg leading-relaxed text-center">
                {flipped
                  ? (cards[current] as unknown as Record<string, string>)[`back${suffix}`]
                  : (cards[current] as unknown as Record<string, string>)[`front${suffix}`]}
              </p>
              <p className="text-gray-500 text-xs mt-4 flex items-center gap-1">
                <RotateCcw size={12} /> {t("flash.tap_flip")}
              </p>
            </button>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => markCard("new")}
                className="py-3 rounded-xl text-sm font-medium border border-red-500/30 text-red-400 bg-red-500/10 hover:bg-red-500/20 transition-colors"
              >
                {t("flash.dont_know")}
              </button>
              <button
                onClick={() => markCard("learning")}
                className="py-3 rounded-xl text-sm font-medium border border-yellow-500/30 text-yellow-400 bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors"
              >
                {t("flash.almost")}
              </button>
              <button
                onClick={() => markCard("mastered")}
                className="py-3 rounded-xl text-sm font-medium border border-green-500/30 text-green-400 bg-green-500/10 hover:bg-green-500/20 transition-colors"
              >
                {t("flash.got_it")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
