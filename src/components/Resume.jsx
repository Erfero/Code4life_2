import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useContent } from "../hooks/useContent";
import { useTranslation } from "../i18n/useTranslation";

const CV_PATH = "/cv/CV-FULLSTACK.pdf";

const CvPreviewModal = ({ onClose, t }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl h-[85vh] bg-tertiary rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <p className="text-white font-heading font-semibold text-[15px]">{t("resume.modalTitle")}</p>
          <div className="flex items-center gap-4">
            <a href={CV_PATH} download className="text-accent text-[13px] font-medium hover:underline">
              {t("resume.modalDownload")}
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 transition-colors"
              aria-label={t("resume.modalClose")}
            >
              ✕
            </button>
          </div>
        </div>
        <iframe src={CV_PATH} title={t("resume.modalTitle")} className="w-full h-[calc(100%-49px)] bg-white" />
      </div>
    </div>
  );
};

const Resume = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const { education, strengths, reference, whyHireMe } = useContent();
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("resume.eyebrow")}</p>
        <h2 className={styles.sectionHeadText}>{t("resume.title")}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t("resume.intro")}
      </motion.p>

      <div className="mt-12 grid lg:grid-cols-[300px_1fr] gap-8 items-start">
        <motion.div
          variants={fadeIn("right", "spring", 0.15, 0.75)}
          className="lg:sticky lg:top-28 bg-tertiary rounded-2xl border border-white/10 p-6 flex flex-col items-center text-center gap-5"
        >
          <button
            onClick={() => setPreviewOpen(true)}
            className="group relative w-36 aspect-[3/4] rounded-lg bg-white/5 border border-white/15 overflow-hidden flex flex-col gap-1.5 p-3 hover:border-accent/50 transition-colors"
          >
            <span className="h-2 w-3/4 bg-accent/40 rounded-full" />
            <span className="h-1.5 w-1/2 bg-white/15 rounded-full mb-2" />
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="h-1 rounded-full bg-white/10"
                style={{ width: `${85 - (i % 3) * 15}%` }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-[12px] font-medium">{t("resume.previewCta")}</span>
            </div>
          </button>

          <div>
            <p className="text-white font-heading font-bold text-[16px]">{t("resume.name")}</p>
            <p className="text-secondary text-[13px]">{t("resume.role")}</p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <button
              onClick={() => setPreviewOpen(true)}
              className="w-full text-white text-[14px] font-medium border border-white/15 rounded-lg py-2.5 hover:border-accent hover:text-accent transition-colors"
            >
              {t("resume.viewCv")}
            </button>
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full bg-accent text-primary text-[14px] font-heading font-bold rounded-lg py-2.5 hover:opacity-90 transition-opacity"
            >
              {t("resume.download")}
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col gap-10">
          <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)}>
            <h3 className="font-heading font-bold text-white text-[20px] mb-5">
              {t("resume.whyHireMe")}
            </h3>
            <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
              {whyHireMe.map((item, i) => (
                <div key={item.title} className="flex gap-4 py-4">
                  <span className="text-accent font-heading font-bold text-[14px] w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-[15px] mb-1">{item.title}</p>
                    <p className="text-secondary text-[14px] leading-[22px]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div variants={fadeIn("up", "spring", 0.25, 0.75)}>
              <h3 className="text-white font-heading font-bold text-[16px] mb-4">{t("resume.education")}</h3>
              <div className="flex flex-col gap-5">
                {education.map((item) => (
                  <div key={item.title} className="relative pl-5 border-l border-white/15">
                    <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent" />
                    <p className="text-white font-semibold text-[14px]">{item.title}</p>
                    <p className="text-accent text-[13px]">{item.school}</p>
                    <p className="text-secondary text-[12px] mt-0.5">{item.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn("up", "spring", 0.3, 0.75)} className="flex flex-col gap-6">
              <div>
                <h3 className="text-white font-heading font-bold text-[16px] mb-4">{t("resume.strengths")}</h3>
                <div className="flex flex-wrap gap-2">
                  {strengths.map((s) => (
                    <span
                      key={s}
                      className="text-accent text-[13px] border border-accent/40 rounded-full px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-secondary font-heading font-bold text-[12px] uppercase tracking-wide mb-2">
                  {t("resume.reference")}
                </h3>
                <p className="text-white text-[14px]">{reference.name}</p>
                <p className="text-secondary text-[12px]">{reference.role}</p>
                <p className="text-secondary text-[12px] mt-1">{t("resume.referenceNote")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {previewOpen && <CvPreviewModal onClose={() => setPreviewOpen(false)} t={t} />}
    </>
  );
};

export default SectionWrapper(Resume, "resume");
