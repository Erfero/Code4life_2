import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useContent } from "../hooks/useContent";
import { useTranslation } from "../i18n/useTranslation";

const Tech = () => {
  const { technologies } = useContent();
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("tech.eyebrow")}</p>
        <h2 className={styles.sectionHeadText}>{t("tech.title")}</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 sm:gap-6">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", (index % 6) * 0.08, 0.6)}
            className="flex flex-col items-center gap-3 bg-tertiary border border-white/10 rounded-2xl py-6 px-3 hover:border-accent/40 transition-colors"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-xl"
            />
            <p className="text-white text-[13px] sm:text-[14px] font-medium text-center">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
