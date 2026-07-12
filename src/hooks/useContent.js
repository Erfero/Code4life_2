import * as fr from "../constants";
import * as en from "../constants/en";
import { useLanguage } from "../context/LanguageContext";

export function useContent() {
  const { language } = useLanguage();
  return language === "en" ? en : fr;
}
