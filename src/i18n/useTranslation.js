import { useLanguage } from "../context/LanguageContext";
import ui from "./ui";

export function useTranslation() {
  const { language } = useLanguage();
  const t = (key) => ui[language][key] ?? key;
  return { t, language };
}
