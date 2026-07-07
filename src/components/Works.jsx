import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Logo from "./Logo";

const ProjectCard = ({ index, name, description, tags, badge, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px] rounded-2xl bg-accent-gradient flex items-center justify-center overflow-hidden">
          {badge === "logo" ? (
            <Logo className="w-20 h-20" withBg={false} />
          ) : (
            <img src={badge} alt={name} className="w-20 h-20 rounded-2xl object-contain" />
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-heading font-bold text-[22px]">{name}</h3>
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
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary bg-accent font-semibold text-[14px] px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Voir en ligne ↗
            </a>
          ) : (
            <a
              href="#contact"
              className="inline-block text-accent border border-accent/40 font-semibold text-[14px] px-5 py-2 rounded-lg hover:bg-accent/10 transition-colors"
            >
              Projet client — me contacter pour en savoir plus
            </a>
          )}
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
          Une sélection de projets issus de mes missions récentes. Certains sont des
          projets clients confidentiels présentés en étude de cas ; d&apos;autres, comme ce
          portfolio, sont en ligne et s&apos;ouvrent dans un nouvel onglet.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
