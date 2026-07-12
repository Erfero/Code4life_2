import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return "fr";
  const stored = localStorage.getItem("c4l-lang");
  if (stored === "fr" || stored === "en") return stored;
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  const toggleLanguage = () =>
    setLanguage((l) => {
      const next = l === "fr" ? "en" : "fr";
      localStorage.setItem("c4l-lang", next);
      return next;
    });

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
