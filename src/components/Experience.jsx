import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";
import { useContent } from "../hooks/useContent";
import { useTranslation } from "../i18n/useTranslation";

const ExperienceCard = ({ experience }) => {
  const { theme } = useTheme();
  const cardBg = theme === "light" ? "#f1f5eb" : "#121212";
  const cardText = theme === "light" ? "#12180f" : "#fff";

  return (
  <VerticalTimelineElement
    contentStyle={{ background: cardBg, color: cardText }}
    contentArrowStyle={{ borderRight: `7px solid ${cardBg}` }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className="w-[55%] h-[55%] object-contain" />
      </div>
    }>
    <div>
      <h3 className="text-white text-[24px] font-bold"> {experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2"> {
      experience.points.map((point, index) => (
        <li
        key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))
    }

    </ul>
  </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { experiences } = useContent();
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("experience.eyebrow")}</p>
        <h2 className={styles.sectionHeadText}>{t("experience.title")}</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}


export default SectionWrapper(Experience, 'experience')