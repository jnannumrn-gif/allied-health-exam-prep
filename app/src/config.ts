const config = {
  examName: "Allied Health Exam Prep",
  examCode: "AH-CERT",
  themeColor: "#0d9488",
  examQuestions: 100,
  storagePrefix: "allied_health",
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:8787",
  domains: [
    "medical_assisting",
    "pharmacy_tech",
    "health_info_tech",
    "patient_care_safety",
  ],
};

export default config;
