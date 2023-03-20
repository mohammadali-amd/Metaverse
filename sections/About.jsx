import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = ({ title, paragraph }) => (
  <section className={`${styles.paddings} relative z-10`} id="pricing">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title={`| ${title}`}
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {paragraph}
        <br />
        ما در وب استودیو در تلاشیم با بکار بردن بروزترین تکنولوژی ها و در نظر گرفتن جزئیات کار، بهترین محصول را تحویل شما کارفرمایان عزیز دهیم و شما را از اعتماد به این مجموعه خرسند نماییم.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.5, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
