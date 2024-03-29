import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Web studio
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>وب استــودیــو</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]" />
        <Image
          src="/about-pic.jpg"
          alt="about-webstudio"
          width={1500}
          height={500}
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <div className="w-full flex justify-end sm:-mt-[150px] -mt-[100px] -mr-[20px] relative z-10">
          <Image
            src="/Logo.png"
            alt="stamp"
            width={100}
            height={100}
            className="sm:w-[110px] w-[80px] sm:h-[155px] h-[100px] object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
