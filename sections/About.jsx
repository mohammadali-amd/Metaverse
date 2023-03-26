import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="pricing">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| درباره ما"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        مجموعه وب استودیو از سال 1400 فعالیت خود را در حوزه طراحی وب و برنامه نویسی شروع کرده و با شور و اشتیاق به فعالیت خود در این زمینه ادامه می دهد.✨
        <br />
        ما در وب استودیو در تلاشیم با بکار بردن بروزترین تکنولوژی ها و در نظر گرفتن جزئیات کار، بهترین محصول را تحویل شما کارفرمایان عزیز دهیم و شما را از اعتماد به این مجموعه خرسند نماییم.✅
        <br />
        برای طراحی سایت، اپلیکیشن موبایل، دیجیتال مارکتینگ و ... از طریق راه های ارتباطی ذکر شده با ما در تماس باشید. 😊💕
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 1)}
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      >
        <Image
          src="/arrow-down.svg"
          alt="arrow down"
          width={50}
          height={50}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
