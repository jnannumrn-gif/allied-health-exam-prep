import { useState, useRef, useEffect, useCallback } from "react";
import { useI18n } from "../i18n";
import config from "../config";
import {
  Send,
  Stethoscope,
  Pill,
  Droplets,
  Bot,
  User,
  Lock,
} from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface Division {
  id: string;
  nameKey: string;
  descKey: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  color: string;
  borderColor: string;
  bgColor: string;
  topics: { en: string[]; es: string[] };
  suggestions: { en: string[]; es: string[] };
  systemPrompt: { en: string; es: string };
}

const DIVISIONS: Division[] = [
  {
    id: "medical_assisting",
    nameKey: "tutor.medical_assisting",
    descKey: "tutor.ma_desc",
    icon: Stethoscope,
    color: "text-teal-400",
    borderColor: "border-teal-500/30",
    bgColor: "bg-teal-500/10",
    topics: {
      en: ["Vital Signs", "EKG", "Phlebotomy", "Patient Intake", "Medical Terminology", "Office Admin", "Exam Prep"],
      es: ["Signos Vitales", "EKG", "Flebotomia", "Admision del Paciente", "Terminologia Medica", "Admin. de Oficina", "Prep. de Examen"],
    },
    suggestions: {
      en: [
        "What are the normal ranges for adult vital signs?",
        "How do I perform a 12-lead EKG?",
        "Explain the order of draw in phlebotomy",
        "What does the medical assistant do during patient intake?",
      ],
      es: [
        "Cuales son los rangos normales de signos vitales en adultos?",
        "Como se realiza un EKG de 12 derivaciones?",
        "Explicame el orden de extraccion en flebotomia",
        "Que hace el asistente medico durante la admision del paciente?",
      ],
    },
    systemPrompt: {
      en: `You are a clinical tutor specialized in Medical Assisting for Allied Health Exam Prep. Your mission is to teach clinical procedures, patient intake, vital signs measurement, EKG interpretation, phlebotomy technique, medical terminology, and medical office administration — clearly, deeply, and with real clinical reasoning.

Respond in English by default. If the user writes in Spanish, respond in Spanish.
Use accessible but technically precise language.
When helpful, structure your response with key points or steps.
At the end of longer responses, you may add a reflection question in exam style.
Never fabricate clinical information. If something requires institutional validation, say so.
Maintain a professional, warm, and pedagogical tone — like a colleague with 30 years of experience who genuinely wants the student to understand.`,
      es: `Eres un tutor clinico especializado en Asistencia Medica para Allied Health Exam Prep. Tu mision es ensenar procedimientos clinicos, admision del paciente, toma de signos vitales, interpretacion de EKG, tecnica de flebotomia, terminologia medica y administracion de oficina medica — de manera clara, profunda y con razonamiento clinico real.

Responde siempre en espanol a menos que el usuario escriba en ingles.
Usa lenguaje accesible pero tecnicamente preciso.
Cuando sea util, estructura tu respuesta con puntos clave o pasos.
Al final de respuestas largas, puedes agregar una pregunta de reflexion tipo examen.
Jamas inventes informacion clinica. Si algo requiere validacion institucional, dilo.
Manten un tono profesional, calido y pedagogico — como un colega con 30 anos de experiencia que genuinamente quiere que el estudiante entienda.`,
    },
  },
  {
    id: "pharmacy_tech",
    nameKey: "tutor.pharmacy_tech",
    descKey: "tutor.pt_desc",
    icon: Pill,
    color: "text-rose-400",
    borderColor: "border-rose-500/30",
    bgColor: "bg-rose-500/10",
    topics: {
      en: ["Drug Classifications", "Compounding", "Pharmacy Law", "Dosage Calculations", "Drug Interactions", "Inventory Management", "Exam Prep"],
      es: ["Clasificacion de Medicamentos", "Preparacion", "Leyes de Farmacia", "Calculo de Dosis", "Interacciones", "Inventario", "Prep. de Examen"],
    },
    suggestions: {
      en: [
        "What are the top drug classifications I need to know?",
        "Explain the difference between generic and brand-name drugs",
        "How do I calculate dosage conversions?",
        "What are the key pharmacy laws (DEA schedules)?",
      ],
      es: [
        "Cuales son las principales clasificaciones de medicamentos?",
        "Cual es la diferencia entre medicamentos genericos y de marca?",
        "Como se calculan las conversiones de dosis?",
        "Cuales son las leyes clave de farmacia (clasificaciones DEA)?",
      ],
    },
    systemPrompt: {
      en: `You are a clinical tutor specialized in Pharmacy Technology for Allied Health Exam Prep. Your mission is to teach pharmacology, drug classifications, compounding techniques, dispensing procedures, dosage calculations, inventory management, pharmacy law, and exam preparation — clearly, deeply, and with practical reasoning.

Respond in English by default. If the user writes in Spanish, respond in Spanish.
Use accessible but technically precise language.
When helpful, structure your response with key points or steps.
At the end of longer responses, you may add a reflection question in exam style.
Never fabricate pharmaceutical information. If something requires institutional validation, say so.
Maintain a professional, warm, and pedagogical tone — like a colleague with 30 years of experience who genuinely wants the student to understand.`,
      es: `Eres un tutor clinico especializado en Tecnologia de Farmacia para Allied Health Exam Prep. Tu mision es ensenar farmacologia, clasificaciones de medicamentos, tecnicas de preparacion, procedimientos de dispensacion, calculos de dosis, manejo de inventario, leyes de farmacia y preparacion para el examen — de manera clara, profunda y con razonamiento practico.

Responde siempre en espanol a menos que el usuario escriba en ingles.
Usa lenguaje accesible pero tecnicamente preciso.
Cuando sea util, estructura tu respuesta con puntos clave o pasos.
Al final de respuestas largas, puedes agregar una pregunta de reflexion tipo examen.
Jamas inventes informacion farmaceutica. Si algo requiere validacion institucional, dilo.
Manten un tono profesional, calido y pedagogico — como un colega con 30 anos de experiencia que genuinamente quiere que el estudiante entienda.`,
    },
  },
  {
    id: "phlebotomy_tech",
    nameKey: "tutor.phlebotomy_tech",
    descKey: "tutor.phleb_desc",
    icon: Droplets,
    color: "text-violet-400",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/10",
    topics: {
      en: ["Venipuncture", "Order of Draw", "Specimen Collection", "Safety Protocols", "Anatomy", "Lab Procedures", "Exam Prep"],
      es: ["Venopuncion", "Orden de Extraccion", "Recoleccion de Muestras", "Protocolos de Seguridad", "Anatomia", "Procedimientos de Lab", "Prep. de Examen"],
    },
    suggestions: {
      en: [
        "What is the correct order of draw for venipuncture?",
        "Explain the proper venipuncture technique step by step",
        "What are the most common complications in phlebotomy?",
        "How do I handle a difficult vein or patient?",
      ],
      es: [
        "Cual es el orden correcto de extraccion en venopuncion?",
        "Explicame la tecnica correcta de venopuncion paso a paso",
        "Cuales son las complicaciones mas comunes en flebotomia?",
        "Como manejo una vena dificil o un paciente complicado?",
      ],
    },
    systemPrompt: {
      en: `You are a clinical tutor specialized in Phlebotomy Technology for Allied Health Exam Prep. Your mission is to teach venipuncture techniques, order of draw, specimen collection and handling, safety protocols, vascular anatomy, lab procedures, and exam preparation — clearly, deeply, and with real clinical reasoning.

Respond in English by default. If the user writes in Spanish, respond in Spanish.
Use accessible but technically precise language.
When helpful, structure your response with key points or steps.
At the end of longer responses, you may add a reflection question in exam style.
Never fabricate clinical information. If something requires institutional validation, say so.
Maintain a professional, warm, and pedagogical tone — like a colleague with 30 years of experience who genuinely wants the student to understand.`,
      es: `Eres un tutor clinico especializado en Tecnologia de Flebotomia para Allied Health Exam Prep. Tu mision es ensenar tecnicas de venopuncion, orden de extraccion, recoleccion y manejo de muestras, protocolos de seguridad, anatomia vascular, procedimientos de laboratorio y preparacion para el examen — de manera clara, profunda y con razonamiento clinico real.

Responde siempre en espanol a menos que el usuario escriba en ingles.
Usa lenguaje accesible pero tecnicamente preciso.
Cuando sea util, estructura tu respuesta con puntos clave o pasos.
Al final de respuestas largas, puedes agregar una pregunta de reflexion tipo examen.
Jamas inventes informacion clinica. Si algo requiere validacion institucional, dilo.
Manten un tono profesional, calido y pedagogico — como un colega con 30 anos de experiencia que genuinamente quiere que el estudiante entienda.`,
    },
  },
];

const ACTIVE_CERT_IDS = ["medical_assisting"];

function formatResponse(text: string): string {
  let formatted = text;
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/\*(.*?)\*/g, "<em>$1</em>");
  formatted = formatted.replace(/^[-•]\s(.+)$/gm, "<li>$1</li>");
  formatted = formatted.replace(/^\d+\.\s(.+)$/gm, "<li>$1</li>");
  const blocks = formatted.split("\n\n").filter(Boolean);
  return blocks
    .map((block) => {
      if (block.includes("<li>")) return `<ul class="list-disc pl-5 my-2">${block}</ul>`;
      return `<p class="mb-2 last:mb-0">${block.replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}

export default function Tutor() {
  const { t, lang } = useI18n();
  const [selectedDivision, setSelectedDivision] = useState<Division | null>(
    () => {
      const savedId = sessionStorage.getItem(`${config.storagePrefix}_tutor_division`);
      if (savedId) {
        return DIVISIONS.find((d) => d.id === savedId) || null;
      }
      return null;
    }
  );
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = sessionStorage.getItem(`${config.storagePrefix}_tutor_messages`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  useEffect(() => {
    sessionStorage.setItem(
      `${config.storagePrefix}_tutor_messages`,
      JSON.stringify(messages)
    );
  }, [messages]);

  const selectDivision = (div: Division) => {
    setSelectedDivision(div);
    sessionStorage.setItem(`${config.storagePrefix}_tutor_division`, div.id);
    setMessages([]);
    sessionStorage.removeItem(`${config.storagePrefix}_tutor_messages`);
  };

  const changeDivision = () => {
    setSelectedDivision(null);
    sessionStorage.removeItem(`${config.storagePrefix}_tutor_division`);
    setMessages([]);
    sessionStorage.removeItem(`${config.storagePrefix}_tutor_messages`);
  };

  const sendMessage = async (text?: string) => {
    const msgText = text || input.trim();
    if (!msgText || isLoading) return;

    setInput("");
    const newMessages: ChatMessage[] = [...messages, { role: "user", content: msgText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const systemPrompt = selectedDivision?.systemPrompt[lang] || "";
      const response = await fetch(config.tutorProxyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: systemPrompt,
          messages: newMessages,
        }),
      });

      const data = await response.json();
      if (data.error) {
        setMessages([
          ...newMessages,
          { role: "assistant", content: `Error: ${data.error.message || "Service unavailable."}` },
        ]);
      } else {
        const reply = data.content?.[0]?.text || "...";
        setMessages([...newMessages, { role: "assistant", content: reply }]);
      }
    } catch {
      const errorMsg =
        lang === "es"
          ? "Error de conexion. Intenta de nuevo."
          : "Connection error. Please try again.";
      setMessages([...newMessages, { role: "assistant", content: errorMsg }]);
    }

    setIsLoading(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Division selection screen
  if (!selectedDivision) {
    return (
      <div className="min-h-screen bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">
              <Bot size={48} className="mx-auto text-teal-400" />
            </div>
            <h1 className="text-3xl font-bold mb-3">{t("tutor.title")}</h1>
            <p className="text-gray-400 text-lg">{t("tutor.select_prompt")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIVISIONS.map((div) => {
              const isActive = ACTIVE_CERT_IDS.includes(div.id);
              return (
                <button
                  key={div.id}
                  onClick={() => isActive && selectDivision(div)}
                  disabled={!isActive}
                  className={`${div.bgColor} ${div.borderColor} border rounded-2xl p-6 text-left transition-all relative ${isActive ? "hover:-translate-y-1 hover:shadow-lg" : "opacity-60 cursor-not-allowed"}`}
                >
                  {!isActive && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-gray-800/80 text-gray-400 text-xs px-2 py-1 rounded-full">
                      <Lock size={10} />
                      {t("tutor.coming_soon")}
                    </div>
                  )}
                  <div className={`${div.bgColor} ${div.borderColor} border w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    <div.icon size={28} className={div.color} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t(div.nameKey)}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(div.descKey)}
                  </p>
                  {!isActive && (
                    <p className="text-gray-500 text-xs mt-2 italic">{t("tutor.coming_soon_desc")}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const topics = selectedDivision.topics[lang];
  const suggestions = selectedDivision.suggestions[lang];
  const DivIcon = selectedDivision.icon;

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col bg-gray-950">
      {/* Topic pills bar */}
      <div className="flex gap-2 px-4 py-2 border-b border-gray-800 bg-gray-900/50 overflow-x-auto scrollbar-hide flex-shrink-0">
        <button
          onClick={changeDivision}
          className={`whitespace-nowrap px-3 py-1 rounded-full border text-xs font-semibold ${selectedDivision.borderColor} ${selectedDivision.color} ${selectedDivision.bgColor}`}
        >
          <DivIcon size={12} className="inline mr-1" />
          {t(selectedDivision.nameKey)}
        </button>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => {
              setInput(`${topic}: `);
              inputRef.current?.focus();
            }}
            className="whitespace-nowrap px-3 py-1 rounded-full border border-gray-700 text-xs text-gray-400 hover:border-teal-500 hover:text-teal-400 transition-colors"
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-12 max-w-md mx-auto">
            <DivIcon size={40} className={`mx-auto mb-4 ${selectedDivision.color}`} />
            <h2 className="text-xl font-bold mb-2">{t("tutor.welcome_title")}</h2>
            <p className="text-gray-400 text-sm mb-6">{t("tutor.welcome_sub")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-3 text-left text-xs text-gray-400 hover:border-teal-500/50 hover:text-gray-300 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs mt-1 ${
                msg.role === "user"
                  ? "bg-gray-800 border border-gray-700 text-gray-400"
                  : "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
              }`}
            >
              {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-blue-900/30 border border-blue-500/20 rounded-tr-sm"
                  : "bg-gray-900 border border-gray-800 rounded-tl-sm"
              }`}
            >
              {msg.role === "assistant" ? (
                <div
                  className="prose prose-invert prose-sm max-w-none [&_strong]:text-cyan-400 [&_em]:text-amber-400 [&_em]:not-italic [&_em]:font-mono [&_em]:text-xs"
                  dangerouslySetInnerHTML={{ __html: formatResponse(msg.content) }}
                />
              ) : (
                <span>{msg.content}</span>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 text-white mt-1">
              <Bot size={14} />
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "200ms" }} />
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "400ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-800 bg-gray-900 px-4 py-3 flex-shrink-0">
        <div className="flex gap-2 items-end bg-gray-950 border border-gray-800 rounded-xl px-3 py-2 focus-within:border-teal-500 transition-colors">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("tutor.placeholder")}
            rows={1}
            className="flex-1 bg-transparent border-none outline-none text-white text-sm resize-none max-h-28 min-h-[22px] placeholder-gray-600"
            style={{ height: "auto" }}
            onInput={(e) => {
              const el = e.currentTarget;
              el.style.height = "auto";
              el.style.height = `${Math.min(el.scrollHeight, 112)}px`;
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={isLoading || !input.trim()}
            className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center transition-all hover:bg-teal-500 disabled:bg-gray-700 disabled:cursor-not-allowed flex-shrink-0"
          >
            <Send size={14} className="text-white" />
          </button>
        </div>
        <div className="text-center mt-2 text-[10px] text-gray-600 tracking-wide">
          {t("tutor.hint")}
        </div>
      </div>
    </div>
  );
}
