import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { profile } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { useContent } from "../hooks/useContent";
import { useTranslation } from "../i18n/useTranslation";

const ServiceCard = ({ index, title, description, icon }) => {
  return (
    <Tilt options={{ max: 25, scale: 1, speed: 450 }} className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full accent-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[260px] flex justify-evenly items-center flex-col text-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-heading font-bold text-center">
            {title}
          </h3>
          <p className="text-secondary text-[13px] text-center">{description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { services, stats } = useContent();
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("about.eyebrow")}</p>
        <h2 className={styles.sectionHeadText}>{t("about.title")}</h2>
      </motion.div>

      <div className="mt-14 flex lg:flex-row flex-col gap-10 items-center">
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:flex-[0.4] w-full flex justify-center"
        >
          <div className="relative w-full max-w-[380px]">
            <div className="absolute -inset-2 rounded-[28px] bg-accent/20 blur-2xl" />
            <img
              src={profile}
              alt="Erféro Keoula"
              className="relative w-full rounded-[24px] object-cover border border-accent/40 shadow-card"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeIn("left", "spring", 0.3, 1)} className="lg:flex-[0.6] w-full">
          <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">{t("about.bio")}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-tertiary border border-white/10 rounded-2xl px-6 py-4 min-w-[140px]"
              >
                <p className="text-accent font-heading font-bold text-[28px] leading-none">
                  {stat.value}
                </p>
                <p className="text-secondary text-[13px] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
