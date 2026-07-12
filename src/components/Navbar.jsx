import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { menu, close } from "../assets";
import Logo from "./Logo";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../i18n/useTranslation";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="4" />
    <path
      strokeLinecap="round"
      d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]" stroke="currentColor" strokeWidth="1.8">
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" strokeLinejoin="round" />
  </svg>
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  const navLinks = [
    { id: "about", title: t("nav.about") },
    { id: "experience", title: t("nav.experience") },
    { id: "resume", title: t("nav.resume") },
    { id: "work", title: t("nav.work") },
    { id: "contact", title: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Logo className="w-9 h-9" />
          <p className="text-white text-[18px] font-heading font-bold cursor-pointer flex">
            Code4Life
          </p>
        </Link>
        <ul className="list-none hidden lg:flex flex-row items-center gap-6 xl:gap-10 shrink-0">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-accent text-[16px] xl:text-[18px] font-medium cursor-pointer transition-colors whitespace-nowrap`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li className="flex items-center gap-2 border-l border-white/15 pl-6 xl:pl-10">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t(theme === "dark" ? "theme.toggleToLight" : "theme.toggleToDark")}
              title={t(theme === "dark" ? "theme.toggleToLight" : "theme.toggleToDark")}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-secondary hover:text-accent hover:border-accent transition-colors"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-secondary hover:text-accent hover:border-accent transition-colors text-[12px] font-heading font-bold"
            >
              {t("lang.toggle")}
            </button>
          </li>
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t(theme === "dark" ? "theme.toggleToLight" : "theme.toggleToDark")}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-secondary"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-secondary text-[12px] font-heading font-bold"
          >
            {t("lang.toggle")}
          </button>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-accent text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
