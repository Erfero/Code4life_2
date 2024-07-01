import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { testimonials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]"
    >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Voici ce que disent les autres</p>
          <h2 className={styles.sectionHeadText}>Témoignages.</h2>
        </motion.div>

      </div>
    </div>
  )
}


export default Feedbacks