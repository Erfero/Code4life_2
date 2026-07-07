import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { education, strengths, reference } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Pour aller plus loin</p>
        <h2 className={styles.sectionHeadText}>Mon CV.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Un aperçu rapide de ma formation et de mes atouts. Pour le détail complet
        (expériences, compétences, langues), le PDF reste la source la plus fiable.
      </motion.p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="bg-tertiary rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-white font-heading font-bold text-[22px] mb-6">Formation</h3>
          <div className="flex flex-col gap-6">
            {education.map((item) => (
              <div key={item.title}>
                <p className="text-white font-semibold text-[16px]">{item.title}</p>
                <p className="text-accent text-[14px]">{item.school}</p>
                <p className="text-secondary text-[13px] mt-1">{item.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="bg-tertiary rounded-2xl p-8 border border-white/10 flex flex-col justify-between gap-8"
        >
          <div>
            <h3 className="text-white font-heading font-bold text-[22px] mb-6">Atouts</h3>
            <div className="flex flex-wrap gap-3">
              {strengths.map((s) => (
                <span
                  key={s}
                  className="text-accent text-[14px] border border-accent/40 rounded-full px-4 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-heading font-bold text-[16px] mb-2">
              Référence professionnelle
            </h3>
            <p className="text-white text-[15px]">{reference.name}</p>
            <p className="text-secondary text-[13px]">{reference.role}</p>
            <p className="text-secondary text-[13px]">
              Coordonnées disponibles sur demande ou dans le CV ci-dessous.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeIn("up", "spring", 0.4, 0.75)} className="mt-10 flex justify-center">
        <a
          href="/cv/erfero-keoula-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="bg-accent text-primary font-heading font-bold py-3 px-8 rounded-xl shadow-card hover:opacity-90 transition-opacity"
        >
          Télécharger mon CV (PDF)
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
