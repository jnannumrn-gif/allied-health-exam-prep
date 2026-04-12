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
    "landing.tagline": "Pass your Medical Assistant certification exam on the first try. Practice with real exam-style questions, AI tutoring, and smart study tools.",
    "landing.cta_start": "Start Studying Free",
    "landing.cta_login": "Sign In",
    "landing.feature1_title": "Practice Mode",
    "landing.feature1_desc": "Study at your own pace with instant feedback and detailed explanations for every question.",
    "landing.feature2_title": "Mock Exams",
    "landing.feature2_desc": "Simulate the real CMA/RMA exam with timed questions and detailed scoring.",
    "landing.feature3_title": "AI Tutor",
    "landing.feature3_desc": "Get personalized help from an AI tutor specialized in your certification area.",
    "landing.feature4_title": "Bilingual Support",
    "landing.feature4_desc": "Study in English or Spanish — switch anytime to match your comfort level.",
    "landing.hero_badge": "Medical Assistant Exam Prep",
    "landing.hero_title": "Your CMA/RMA Certification Starts Here",
    "landing.cert_section_title": "Choose Your Certification",
    "landing.cert_section_sub": "Start with Medical Assistant — more certifications coming soon.",
    "landing.coming_soon": "Coming Soon",
    "landing.active": "Available Now",
    "landing.questions": "questions",
    "landing.minutes": "minutes",
    "landing.freemium_title": "Start Free, Upgrade When Ready",
    "landing.freemium_free": "Free",
    "landing.freemium_free_desc": "10 practice questions + 1 AI tutor session",
    "landing.freemium_pro": "Pro",
    "landing.freemium_pro_price": "$9.99/mo",
    "landing.freemium_pro_desc": "Unlimited questions, exams, flashcards & AI tutor per certification",
    "landing.freemium_bundle": "Bundle",
    "landing.freemium_bundle_price": "$79.99/yr",
    "landing.freemium_bundle_desc": "Access all certifications — best value",

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

    // Onboarding
    "onboard.step1_title": "Choose Your Certification",
    "onboard.step1_sub": "What are you studying for?",
    "onboard.step2_title": "Your Info",
    "onboard.step2_sub": "Create your account",
    "onboard.step3_title": "Set Your Exam Date",
    "onboard.step3_sub": "We'll help you stay on track",
    "onboard.next": "Next",
    "onboard.back": "Back",
    "onboard.start_studying": "Start Studying",
    "onboard.skip_date": "Skip for now",
    "onboard.step": "Step",
    "onboard.of": "of",

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
    "nav.tutor": "AI Tutor",

    // Dashboard
    "dash.readiness": "Exam Readiness",
    "dash.questions_answered": "questions answered",
    "dash.streak": "Study Streak",
    "dash.days": "days",
    "dash.streak_msg": "Keep going!",
    "dash.practice_now": "Practice Now",
    "dash.full_exam": "Mock Exam",
    "dash.flashcards": "Flashcards",
    "dash.my_stats": "My Stats",
    "dash.domains_title": "Topic Performance",
    "dash.exam_countdown": "Days Until Exam",
    "dash.no_exam_date": "Set your exam date in Settings",
    "dash.certification": "Certification",
    "dash.free_questions_left": "free questions remaining",
    "dash.upgrade_cta": "Upgrade to Pro",
    "dash.upgrade_desc": "Unlock unlimited questions, exams, and AI tutoring",

    // Practice
    "practice.title": "Practice Mode",
    "practice.select_domain": "Select Topic",
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
    "practice.by_domain": "Score by Topic",
    "practice.incorrect_review": "Review Incorrect",
    "practice.again": "Practice Again",
    "practice.go_dashboard": "Dashboard",

    // Exam
    "exam.title": "Mock Exam",
    "exam.description": "Simulate the real certification exam with timed conditions.",
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
    "stats.by_domain": "Performance by Topic",
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
    "settings.certification": "Certification",
    "settings.change_cert": "Change Certification",

    // Certifications / Domains
    "domain.all": "All Topics",
    "domain.medical_assisting": "Medical Assisting",
    "domain.pharmacy_tech": "Pharmacy Technician",
    "domain.phlebotomy_tech": "Phlebotomy Technician",

    // Certification details
    "cert.medical_assisting": "Medical Assistant",
    "cert.pharmacy_tech": "Pharmacy Technician",
    "cert.phlebotomy_tech": "Phlebotomy Technician",
    "cert.ma_desc": "Clinical procedures, vital signs, EKG, phlebotomy, patient intake, medical terminology, and office administration.",
    "cert.pt_desc": "Pharmacology, drug classifications, compounding, dispensing, dosage calculations, inventory, and pharmacy law.",
    "cert.phleb_desc": "Venipuncture, order of draw, specimen collection, safety protocols, anatomy, and lab procedures.",

    // AI Tutor
    "tutor.title": "AI Tutor",
    "tutor.select_division": "Select your certification",
    "tutor.select_prompt": "Choose a certification to start chatting with your AI tutor.",
    "tutor.online": "Online",
    "tutor.placeholder": "Ask a question...",
    "tutor.hint": "Allied Health Exam Prep \u00b7 Educational content \u2014 Does not replace clinical judgment",
    "tutor.change": "Change Certification",
    "tutor.medical_assisting": "Medical Assistant",
    "tutor.pharmacy_tech": "Pharmacy Technician",
    "tutor.phlebotomy_tech": "Phlebotomy Technician",
    "tutor.ma_desc": "Clinical procedures, patient intake, vital signs, EKG, phlebotomy, and medical office administration.",
    "tutor.pt_desc": "Pharmacology, drug classifications, compounding, dispensing, inventory, and pharmacy law.",
    "tutor.phleb_desc": "Venipuncture, order of draw, specimen collection, safety protocols, anatomy, and lab procedures.",
    "tutor.welcome_title": "Your Allied Health clinical tutor",
    "tutor.welcome_sub": "Ask anything about your certification. I'm here to help you truly understand \u2014 not just memorize.",
    "tutor.coming_soon": "Coming Soon",
    "tutor.coming_soon_desc": "This certification tutor will be available soon. Start with Medical Assistant!",

    // Freemium
    "freemium.free_limit": "Free Plan Limit",
    "freemium.used_of": "of",
    "freemium.free_questions": "free questions used",
    "freemium.upgrade": "Upgrade to Pro",
    "freemium.locked": "Premium Content",
    "freemium.unlock": "Unlock with Pro",

    // Common
    "common.loading": "Loading...",
    "common.back": "Back",
    "common.cancel": "Cancel",
  },
  es: {
    // Landing
    "landing.tagline": "Aprueba tu examen de certificacion de Asistente Medico en el primer intento. Practica con preguntas estilo examen real, tutoria IA y herramientas de estudio inteligentes.",
    "landing.cta_start": "Comienza a Estudiar Gratis",
    "landing.cta_login": "Iniciar Sesion",
    "landing.feature1_title": "Modo Practica",
    "landing.feature1_desc": "Estudia a tu ritmo con retroalimentacion instantanea y explicaciones detalladas para cada pregunta.",
    "landing.feature2_title": "Examenes Simulados",
    "landing.feature2_desc": "Simula el examen real CMA/RMA con preguntas cronometradas y puntuacion detallada.",
    "landing.feature3_title": "Tutor IA",
    "landing.feature3_desc": "Recibe ayuda personalizada de un tutor IA especializado en tu area de certificacion.",
    "landing.feature4_title": "Soporte Bilingue",
    "landing.feature4_desc": "Estudia en ingles o espanol — cambia en cualquier momento segun tu comodidad.",
    "landing.hero_badge": "Preparacion Examen Asistente Medico",
    "landing.hero_title": "Tu Certificacion CMA/RMA Empieza Aqui",
    "landing.cert_section_title": "Elige Tu Certificacion",
    "landing.cert_section_sub": "Comienza con Asistente Medico — mas certificaciones proximamente.",
    "landing.coming_soon": "Proximamente",
    "landing.active": "Disponible Ahora",
    "landing.questions": "preguntas",
    "landing.minutes": "minutos",
    "landing.freemium_title": "Comienza Gratis, Mejora Cuando Quieras",
    "landing.freemium_free": "Gratis",
    "landing.freemium_free_desc": "10 preguntas de practica + 1 sesion de tutor IA",
    "landing.freemium_pro": "Pro",
    "landing.freemium_pro_price": "$9.99/mes",
    "landing.freemium_pro_desc": "Preguntas, examenes, tarjetas y tutor IA ilimitados por certificacion",
    "landing.freemium_bundle": "Bundle",
    "landing.freemium_bundle_price": "$79.99/ano",
    "landing.freemium_bundle_desc": "Acceso a todas las certificaciones — mejor valor",

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

    // Onboarding
    "onboard.step1_title": "Elige Tu Certificacion",
    "onboard.step1_sub": "Para que estas estudiando?",
    "onboard.step2_title": "Tu Informacion",
    "onboard.step2_sub": "Crea tu cuenta",
    "onboard.step3_title": "Fecha de Tu Examen",
    "onboard.step3_sub": "Te ayudaremos a mantenerte en camino",
    "onboard.next": "Siguiente",
    "onboard.back": "Atras",
    "onboard.start_studying": "Comenzar a Estudiar",
    "onboard.skip_date": "Saltar por ahora",
    "onboard.step": "Paso",
    "onboard.of": "de",

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
    "nav.tutor": "Tutor IA",

    // Dashboard
    "dash.readiness": "Preparacion para el Examen",
    "dash.questions_answered": "preguntas respondidas",
    "dash.streak": "Racha de Estudio",
    "dash.days": "dias",
    "dash.streak_msg": "Sigue asi!",
    "dash.practice_now": "Practicar Ahora",
    "dash.full_exam": "Examen Simulado",
    "dash.flashcards": "Tarjetas",
    "dash.my_stats": "Mis Estadisticas",
    "dash.domains_title": "Rendimiento por Tema",
    "dash.exam_countdown": "Dias Para el Examen",
    "dash.no_exam_date": "Configura tu fecha de examen en Configuracion",
    "dash.certification": "Certificacion",
    "dash.free_questions_left": "preguntas gratis restantes",
    "dash.upgrade_cta": "Mejorar a Pro",
    "dash.upgrade_desc": "Desbloquea preguntas, examenes y tutoria IA ilimitados",

    // Practice
    "practice.title": "Modo Practica",
    "practice.select_domain": "Seleccionar Tema",
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
    "practice.by_domain": "Puntuacion por Tema",
    "practice.incorrect_review": "Revisar Incorrectas",
    "practice.again": "Practicar de Nuevo",
    "practice.go_dashboard": "Panel",

    // Exam
    "exam.title": "Examen Simulado",
    "exam.description": "Simula el examen real de certificacion con condiciones cronometradas.",
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
    "stats.by_domain": "Rendimiento por Tema",
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
    "settings.certification": "Certificacion",
    "settings.change_cert": "Cambiar Certificacion",

    // Certifications / Domains
    "domain.all": "Todos los Temas",
    "domain.medical_assisting": "Asistencia Medica",
    "domain.pharmacy_tech": "Tecnico de Farmacia",
    "domain.phlebotomy_tech": "Tecnico de Flebotomia",

    // Certification details
    "cert.medical_assisting": "Asistente Medico",
    "cert.pharmacy_tech": "Tecnico de Farmacia",
    "cert.phlebotomy_tech": "Tecnico de Flebotomia",
    "cert.ma_desc": "Procedimientos clinicos, signos vitales, EKG, flebotomia, admision del paciente, terminologia medica y administracion de oficina.",
    "cert.pt_desc": "Farmacologia, clasificaciones de medicamentos, preparacion, dispensacion, calculo de dosis, inventario y leyes de farmacia.",
    "cert.phleb_desc": "Venopuncion, orden de extraccion, recoleccion de muestras, protocolos de seguridad, anatomia y procedimientos de laboratorio.",

    // AI Tutor
    "tutor.title": "Tutor IA",
    "tutor.select_division": "Elige tu certificacion",
    "tutor.select_prompt": "Selecciona una certificacion para comenzar a chatear con tu tutor IA.",
    "tutor.online": "En linea",
    "tutor.placeholder": "Haz una pregunta...",
    "tutor.hint": "Allied Health Exam Prep \u00b7 Contenido educativo \u2014 No reemplaza criterio clinico",
    "tutor.change": "Cambiar Certificacion",
    "tutor.medical_assisting": "Asistente Medico",
    "tutor.pharmacy_tech": "Tecnico de Farmacia",
    "tutor.phlebotomy_tech": "Tecnico de Flebotomia",
    "tutor.ma_desc": "Procedimientos clinicos, toma de signos vitales, EKG, flebotomia y administracion de oficina medica.",
    "tutor.pt_desc": "Farmacologia, clasificaciones de medicamentos, preparacion, dispensacion, inventario y leyes de farmacia.",
    "tutor.phleb_desc": "Venopuncion, orden de extraccion, recoleccion de muestras, protocolos de seguridad, anatomia y procedimientos de laboratorio.",
    "tutor.welcome_title": "Tu tutor clinico de Salud Aliada",
    "tutor.welcome_sub": "Haz cualquier pregunta sobre tu certificacion. Estoy aqui para ayudarte a entender \u2014 no solo a memorizar.",
    "tutor.coming_soon": "Proximamente",
    "tutor.coming_soon_desc": "Este tutor de certificacion estara disponible pronto. Comienza con Asistente Medico!",

    // Freemium
    "freemium.free_limit": "Limite Plan Gratis",
    "freemium.used_of": "de",
    "freemium.free_questions": "preguntas gratis usadas",
    "freemium.upgrade": "Mejorar a Pro",
    "freemium.locked": "Contenido Premium",
    "freemium.unlock": "Desbloquear con Pro",

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
