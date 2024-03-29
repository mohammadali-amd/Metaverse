import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="/web-design.svg"
          alt="web-design"
          className="w-[90%] h-[90%] object-contain"
          width={100}
          height={100}
        />
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| ما در وب استدیو چکار می کنیم؟" />
        <TitleText title={<>برخی از خدمات ما در وب استدیو :</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
