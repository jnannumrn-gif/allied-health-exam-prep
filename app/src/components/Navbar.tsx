import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../i18n";
import { useAuth } from "../auth";
import config from "../config";
import {
  Menu,
  X,
  Home,
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Layers,
  BarChart3,
  Settings,
  LogIn,
  UserPlus,
  LogOut,
  Globe,
} from "lucide-react";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { user, logout } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = user
    ? [
        { to: "/dashboard", label: t("nav.dashboard"), icon: LayoutDashboard },
        { to: "/practice", label: t("nav.practice"), icon: BookOpen },
        { to: "/exam", label: t("nav.exam"), icon: ClipboardList },
        { to: "/flashcards", label: t("nav.flashcards"), icon: Layers },
        { to: "/stats", label: t("nav.stats"), icon: BarChart3 },
        { to: "/settings", label: t("nav.settings"), icon: Settings },
      ]
    : [
        { to: "/", label: t("nav.home"), icon: Home },
        { to: "/login", label: t("nav.login"), icon: LogIn },
        { to: "/register", label: t("nav.register"), icon: UserPlus },
      ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-2">
            <img src="/logo.png" alt="Allied Health Exam Prep" className="w-8 h-8 rounded-lg object-contain" />
            <span className="text-white font-semibold text-lg hidden sm:block">
              {config.examName}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive(link.to)
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <link.icon size={16} />
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Globe size={16} />
              {lang.toUpperCase()}
            </button>

            {user && (
              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-red-400 hover:bg-white/5 transition-colors"
              >
                <LogOut size={16} />
                {t("nav.logout")}
              </button>
            )}
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors ${
                isActive(link.to)
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <link.icon size={18} />
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setLang(lang === "en" ? "es" : "en");
              setOpen(false);
            }}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors w-full"
          >
            <Globe size={18} />
            {lang === "en" ? "Espanol" : "English"}
          </button>
          {user && (
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-red-400 hover:bg-white/5 transition-colors w-full"
            >
              <LogOut size={18} />
              {t("nav.logout")}
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
