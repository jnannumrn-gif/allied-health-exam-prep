export interface Certification {
  id: string;
  name: string;
  nameEs: string;
  examCode: string;
  description: string;
  descriptionEs: string;
  icon: string;
  status: "active" | "coming_soon";
  examQuestions: number;
  examMinutes: number;
  color: string;
}

export const certifications: Certification[] = [
  {
    id: "medical_assisting",
    name: "Medical Assistant",
    nameEs: "Asistente Medico",
    examCode: "CMA/RMA",
    description: "Clinical procedures, vital signs, EKG, phlebotomy, patient intake, medical terminology, and office administration.",
    descriptionEs: "Procedimientos clinicos, signos vitales, EKG, flebotomia, admision del paciente, terminologia medica y administracion de oficina.",
    icon: "Stethoscope",
    status: "active",
    examQuestions: 200,
    examMinutes: 160,
    color: "#0d9488",
  },
  {
    id: "pharmacy_tech",
    name: "Pharmacy Technician",
    nameEs: "Tecnico de Farmacia",
    examCode: "PTCB/ExCPT",
    description: "Pharmacology, drug classifications, compounding, dispensing, dosage calculations, inventory, and pharmacy law.",
    descriptionEs: "Farmacologia, clasificaciones de medicamentos, preparacion, dispensacion, calculo de dosis, inventario y leyes de farmacia.",
    icon: "Pill",
    status: "coming_soon",
    examQuestions: 90,
    examMinutes: 120,
    color: "#e11d48",
  },
  {
    id: "phlebotomy_tech",
    name: "Phlebotomy Technician",
    nameEs: "Tecnico de Flebotomia",
    examCode: "CPT/PBT",
    description: "Venipuncture, order of draw, specimen collection, safety protocols, anatomy, and lab procedures.",
    descriptionEs: "Venopuncion, orden de extraccion, recoleccion de muestras, protocolos de seguridad, anatomia y procedimientos de laboratorio.",
    icon: "Droplets",
    status: "coming_soon",
    examQuestions: 100,
    examMinutes: 120,
    color: "#7c3aed",
  },
];

const config = {
  examName: "Allied Health Exam Prep",
  examCode: "AH-CERT",
  themeColor: "#0d9488",
  examQuestions: 100,
  storagePrefix: "allied_health",
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:8787",
  tutorProxyUrl: import.meta.env.VITE_TUTOR_PROXY_URL || "https://allied-health-tutor-proxy.jnannum-rn.workers.dev",
  certifications,
  primaryCertification: certifications[0],
  domains: certifications.map((c) => c.id),
  freemium: {
    freeQuestions: 10,
    freeTutorSessions: 1,
    pricing: {
      monthly: 9.99,
      yearly: 49.99,
      bundle: 79.99,
    },
  },
};

export default config;
