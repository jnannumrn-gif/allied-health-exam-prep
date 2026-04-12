import { createContext, useContext, useState, useCallback } from "react";
import config from "./config";

type Lang = "en" | "es";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Landing
    "landing.tagline": "Your path to Allied Health certification. Practice with bilingual questions, mock exams, and flashcards.",
    "landing.cta_start": "Get Started Free",
    "landing.cta_login": "Sign In",
    "landing.feature1_title": "Practice Mode",
    "landing.feature1_desc": "Study at your own pace with instant feedback and detailed explanations for every question.",
    "landing.feature2_title": "Mock Exams",
    "landing.feature2_desc": "Simulate the real exam with timed 100-question tests and detailed scoring.",
    "landing.feature3_title": "Flashcards",
    "landing.feature3_desc": "Master key concepts with spaced repetition flashcards across all domains.",
    "landing.feature4_title": "Bilingual Support",
    "landing.feature4_desc": "Study in English or Spanish — switch anytime to match your comfort level.",

    // Auth
    "auth.login_title": "Welcome Back",
    "auth.login_subtitle": "Sign in to continue studying",
    "auth.register_title": "Create Account",
    "auth.register_subtitle": "Start your exam prep journey",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.name": "Full Name",
    "auth.exam_date": "Exam Date (optional)",
    "auth.login_btn": "Sign In",
    "auth.register_btn": "Create Account",
    "auth.no_account": "Don't have an account?",
    "auth.has_account": "Already have an account?",
    "auth.register_link": "Sign up",
    "auth.login_link": "Sign in",

    // Nav
    "nav.home": "Home",
    "nav.dashboard": "Dashboard",
    "nav.practice": "Practice",
    "nav.exam": "Exam",
    "nav.flashcards": "Flashcards",
    "nav.stats": "Stats",
    "nav.settings": "Settings",
    "nav.login": "Sign In",
    "nav.register": "Sign Up",
    "nav.logout": "Logout",

    // Dashboard
    "dash.readiness": "Exam Readiness",
    "dash.questions_answered": "questions answered",
    "dash.streak": "Study Streak",
    "dash.days": "days",
    "dash.streak_msg": "Keep going!",
    "dash.practice_now": "Practice Now",
    "dash.full_exam": "Full Exam",
    "dash.flashcards": "Flashcards",
    "dash.my_stats": "My Stats",
    "dash.domains_title": "Domain Performance",

    // Practice
    "practice.title": "Practice Mode",
    "practice.select_domain": "Select Domain",
    "practice.select_count": "Number of Questions",
    "practice.start": "Start Practice",
    "practice.question": "Question",
    "practice.of": "of",
    "practice.correct": "Correct",
    "practice.incorrect": "Incorrect",
    "practice.explanation": "Explanation",
    "practice.next": "Next",
    "practice.results_title": "Results",
    "practice.score": "Your Score",
    "practice.by_domain": "Score by Domain",
    "practice.incorrect_review": "Review Incorrect",
    "practice.again": "Practice Again",
    "practice.go_dashboard": "Dashboard",

    // Exam
    "exam.title": "Mock Exam",
    "exam.description": "Simulate the real Allied Health certification exam with timed conditions.",
    "exam.start": "Start Exam",
    "exam.question": "Question",
    "exam.answered": "Answered",
    "exam.flagged": "Flagged",
    "exam.flag": "Flag",
    "exam.unflag": "Unflag",
    "exam.submit": "Submit Exam",
    "exam.confirm_submit": "Are you sure you want to submit? You cannot go back.",
    "exam.results_title": "Exam Results",
    "exam.passed": "PASSED",
    "exam.failed": "NOT PASSED",
    "exam.time_taken": "Time Taken",
    "exam.pass_score": "Passing Score",

    // Flashcards
    "flash.title": "Flashcards",
    "flash.new": "New",
    "flash.learning": "Learning",
    "flash.mastered": "Mastered",
    "flash.card": "Card",
    "flash.tap_flip": "Tap to flip",
    "flash.dont_know": "Don't Know",
    "flash.almost": "Almost",
    "flash.got_it": "Got It",

    // Stats
    "stats.title": "My Statistics",
    "stats.total_questions": "Total Questions",
    "stats.overall_accuracy": "Overall Accuracy",
    "stats.by_domain": "Performance by Domain",
    "stats.recent_sessions": "Recent Sessions",
    "stats.session_type": "Type",
    "stats.session_score": "Score",
    "stats.session_date": "Date",
    "stats.no_data": "No data yet. Start practicing!",

    // Settings
    "settings.title": "Settings",
    "settings.language": "Language",
    "settings.update_name": "Name",
    "settings.exam_date": "Exam Date",
    "settings.current_password": "Current Password",
    "settings.new_password": "New Password",
    "settings.save": "Save Changes",
    "settings.saved": "Settings saved successfully!",
    "settings.logout": "Sign Out",

    // Domains
    "domain.all": "All Domains",
    "domain.medical_assisting": "Medical Assisting",
    "domain.pharmacy_tech": "Pharmacy Technician",
    "domain.health_info_tech": "Health Information Technology",
    "domain.patient_care_safety": "Patient Care & Safety",

    // Common
    "common.loading": "Loading...",
    "common.back": "Back",
    "common.cancel": "Cancel",
  },
  es: {
    // Landing
    "landing.tagline": "Tu camino hacia la certificacion en Salud Aliada. Practica con preguntas bilingues, examenes simulados y tarjetas de estudio.",
    "landing.cta_start": "Comienza Gratis",
    "landing.cta_login": "Iniciar Sesion",
    "landing.feature1_title": "Modo Practica",
    "landing.feature1_desc": "Estudia a tu ritmo con retroalimentacion instantanea y explicaciones detalladas para cada pregunta.",
    "landing.feature2_title": "Examenes Simulados",
    "landing.feature2_desc": "Simula el examen real con pruebas cronometradas de 100 preguntas y puntuacion detallada.",
    "landing.feature3_title": "Tarjetas de Estudio",
    "landing.feature3_desc": "Domina conceptos clave con tarjetas de repeticion espaciada en todos los dominios.",
    "landing.feature4_title": "Soporte Bilingue",
    "landing.feature4_desc": "Estudia en ingles o espanol — cambia en cualquier momento segun tu comodidad.",

    // Auth
    "auth.login_title": "Bienvenido de Nuevo",
    "auth.login_subtitle": "Inicia sesion para continuar estudiando",
    "auth.register_title": "Crear Cuenta",
    "auth.register_subtitle": "Comienza tu preparacion para el examen",
    "auth.email": "Correo Electronico",
    "auth.password": "Contrasena",
    "auth.name": "Nombre Completo",
    "auth.exam_date": "Fecha del Examen (opcional)",
    "auth.login_btn": "Iniciar Sesion",
    "auth.register_btn": "Crear Cuenta",
    "auth.no_account": "No tienes cuenta?",
    "auth.has_account": "Ya tienes cuenta?",
    "auth.register_link": "Registrate",
    "auth.login_link": "Inicia sesion",

    // Nav
    "nav.home": "Inicio",
    "nav.dashboard": "Panel",
    "nav.practice": "Practica",
    "nav.exam": "Examen",
    "nav.flashcards": "Tarjetas",
    "nav.stats": "Estadisticas",
    "nav.settings": "Configuracion",
    "nav.login": "Iniciar Sesion",
    "nav.register": "Registrarse",
    "nav.logout": "Cerrar Sesion",

    // Dashboard
    "dash.readiness": "Preparacion para el Examen",
    "dash.questions_answered": "preguntas respondidas",
    "dash.streak": "Racha de Estudio",
    "dash.days": "dias",
    "dash.streak_msg": "Sigue asi!",
    "dash.practice_now": "Practicar Ahora",
    "dash.full_exam": "Examen Completo",
    "dash.flashcards": "Tarjetas",
    "dash.my_stats": "Mis Estadisticas",
    "dash.domains_title": "Rendimiento por Dominio",

    // Practice
    "practice.title": "Modo Practica",
    "practice.select_domain": "Seleccionar Dominio",
    "practice.select_count": "Numero de Preguntas",
    "practice.start": "Iniciar Practica",
    "practice.question": "Pregunta",
    "practice.of": "de",
    "practice.correct": "Correcto",
    "practice.incorrect": "Incorrecto",
    "practice.explanation": "Explicacion",
    "practice.next": "Siguiente",
    "practice.results_title": "Resultados",
    "practice.score": "Tu Puntuacion",
    "practice.by_domain": "Puntuacion por Dominio",
    "practice.incorrect_review": "Revisar Incorrectas",
    "practice.again": "Practicar de Nuevo",
    "practice.go_dashboard": "Panel",

    // Exam
    "exam.title": "Examen Simulado",
    "exam.description": "Simula el examen real de certificacion en Salud Aliada con condiciones cronometradas.",
    "exam.start": "Iniciar Examen",
    "exam.question": "Pregunta",
    "exam.answered": "Respondidas",
    "exam.flagged": "Marcadas",
    "exam.flag": "Marcar",
    "exam.unflag": "Desmarcar",
    "exam.submit": "Entregar Examen",
    "exam.confirm_submit": "Estas seguro de que quieres entregar? No puedes regresar.",
    "exam.results_title": "Resultados del Examen",
    "exam.passed": "APROBADO",
    "exam.failed": "NO APROBADO",
    "exam.time_taken": "Tiempo Utilizado",
    "exam.pass_score": "Puntuacion para Aprobar",

    // Flashcards
    "flash.title": "Tarjetas de Estudio",
    "flash.new": "Nuevas",
    "flash.learning": "Aprendiendo",
    "flash.mastered": "Dominadas",
    "flash.card": "Tarjeta",
    "flash.tap_flip": "Toca para voltear",
    "flash.dont_know": "No Se",
    "flash.almost": "Casi",
    "flash.got_it": "Lo Se",

    // Stats
    "stats.title": "Mis Estadisticas",
    "stats.total_questions": "Total de Preguntas",
    "stats.overall_accuracy": "Precision General",
    "stats.by_domain": "Rendimiento por Dominio",
    "stats.recent_sessions": "Sesiones Recientes",
    "stats.session_type": "Tipo",
    "stats.session_score": "Puntuacion",
    "stats.session_date": "Fecha",
    "stats.no_data": "Sin datos aun. Comienza a practicar!",

    // Settings
    "settings.title": "Configuracion",
    "settings.language": "Idioma",
    "settings.update_name": "Nombre",
    "settings.exam_date": "Fecha del Examen",
    "settings.current_password": "Contrasena Actual",
    "settings.new_password": "Nueva Contrasena",
    "settings.save": "Guardar Cambios",
    "settings.saved": "Configuracion guardada exitosamente!",
    "settings.logout": "Cerrar Sesion",

    // Domains
    "domain.all": "Todos los Dominios",
    "domain.medical_assisting": "Asistencia Medica",
    "domain.pharmacy_tech": "Tecnico de Farmacia",
    "domain.health_info_tech": "Tecnologia de Informacion en Salud",
    "domain.patient_care_safety": "Cuidado del Paciente y Seguridad",

    // Common
    "common.loading": "Cargando...",
    "common.back": "Volver",
    "common.cancel": "Cancelar",
  },
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(`${config.storagePrefix}_lang`);
    return (saved === "en" || saved === "es") ? saved : "es";
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(`${config.storagePrefix}_lang`, l);
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] || key,
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
