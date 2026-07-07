import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Logo from "./Logo";

const ProjectCard = ({ index, slug, name, tagline, description, tags, badge, isPersonal }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", (index % 4) * 0.15, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[180px] rounded-2xl bg-accent-gradient flex items-center justify-center overflow-hidden">
          {isPersonal && (
            <span className="absolute top-3 left-3 text-[11px] text-primary bg-accent font-semibold rounded-full px-3 py-1">
              Projet personnel
            </span>
          )}
          {badge === "logo" ? (
            <Logo className="w-16 h-16" withBg={false} />
          ) : (
            <img src={badge} alt={name} className="w-16 h-16 rounded-2xl object-contain" />
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-heading font-bold text-[20px]">{name}</h3>
          <p className="text-accent text-[13px] mt-1">{tagline}</p>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="mt-5">
          <a
            href={`/projects/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary bg-accent font-semibold text-[14px] px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Voir le projet ↗
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mon travail</p>
        <h2 className={styles.sectionHeadText}>Mes Projets.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Dix projets, du travail client confidentiel aux projets personnels construits pour
          couvrir toute ma stack fullstack. Chaque carte ouvre sa propre page de présentation
          dans un nouvel onglet.
        </motion.p>
      </div>
      <div className="mt-16 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
