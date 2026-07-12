import { useParams, Link } from "react-router-dom";

import Logo from "./Logo";
import { useContent } from "../hooks/useContent";
import { useTranslation } from "../i18n/useTranslation";

const ProjectPage = () => {
  const { slug } = useParams();
  const { projects } = useContent();
  const { t } = useTranslation();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-white font-heading text-[24px]">{t("projectPage.notFound")}</p>
        <Link to="/" className="text-accent underline">
          {t("projectPage.backHome")}
        </Link>
      </div>
    );
  }

  const {
    name,
    tagline,
    description,
    tags,
    badge,
    screenshot,
    externalLink,
    isPersonal,
    context,
    role,
    stack,
    features,
    results,
  } = project;

  return (
    <div className="min-h-screen bg-primary">
      <nav className="w-full flex items-center py-5 px-6 sm:px-16 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="w-9 h-9" />
          <p className="text-white text-[18px] font-heading font-bold">Code4Life</p>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-14">
        <Link to="/" className="text-secondary hover:text-accent text-[14px]">
          {t("projectPage.backLink")}
        </Link>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-24 h-24 shrink-0 rounded-2xl bg-accent-gradient flex items-center justify-center overflow-hidden">
            {badge === "logo" ? (
              <Logo className="w-14 h-14" withBg={false} />
            ) : (
              <img src={badge} alt={name} className="w-14 h-14 rounded-xl object-contain" />
            )}
          </div>
          <div>
            {isPersonal && (
              <span className="inline-block text-[12px] text-accent border border-accent/40 rounded-full px-3 py-1 mb-2">
                {t("works.personalBadge")}
              </span>
            )}
            <h1 className="font-heading font-bold text-white text-[32px] sm:text-[44px] leading-tight">
              {name}
            </h1>
            <p className="text-accent text-[16px] sm:text-[18px] mt-1">{tagline}</p>
          </div>
        </div>

        <p className="mt-8 text-secondary text-[16px] sm:text-[18px] leading-[28px] max-w-3xl">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {externalLink && (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-primary bg-accent font-heading font-semibold text-[15px] px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            {t("projectPage.viewLive")}
          </a>
        )}

        {screenshot && (
          <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-card">
            <img src={screenshot} alt={`${t("projectPage.screenshotAlt")}${name}`} className="w-full h-auto block" />
          </div>
        )}

        <div className="mt-14 grid sm:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading font-bold text-white text-[20px] mb-3">{t("projectPage.context")}</h2>
            <p className="text-secondary text-[15px] leading-[26px]">{context}</p>
          </div>
          <div>
            <h2 className="font-heading font-bold text-white text-[20px] mb-3">{t("projectPage.role")}</h2>
            <p className="text-secondary text-[15px] leading-[26px]">{role}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-heading font-bold text-white text-[20px] mb-4">{t("projectPage.features")}</h2>
          <ul className="list-disc ml-5 space-y-2">
            {features.map((feature) => (
              <li key={feature} className="text-secondary text-[15px] leading-[26px]">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="font-heading font-bold text-white text-[20px] mb-4">{t("projectPage.stack")}</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-white text-[13px] bg-tertiary border border-white/10 rounded-full px-4 py-1.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-tertiary border border-white/10 rounded-2xl p-6">
          <h2 className="font-heading font-bold text-accent text-[18px] mb-2">{t("projectPage.result")}</h2>
          <p className="text-white text-[15px] leading-[26px]">{results}</p>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/#contact"
            className="text-accent border border-accent/40 font-semibold text-[14px] px-6 py-3 rounded-xl hover:bg-accent/10 transition-colors"
          >
            {t("projectPage.ctaSimilar")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
