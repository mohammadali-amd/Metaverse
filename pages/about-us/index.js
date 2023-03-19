import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { Hero, About } from '../../sections';

const HeroText = {
  title: 'درباره ما',
  paragraph: `
  مجموعه وب استودیو از سال 1400 فعالیت خود را در حوزه طراحی وب و برنامه نویسی شروع کرده و با شور و اشتیاق به فعالیت خود در این زمینه ادامه می دهد. 
  `,
};

const AboutUs = () => (
  <div className="py-12">
    <About
      title={HeroText.title}
      paragraph={HeroText.paragraph}
    />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full flex justify-center items-center mx-auto flex-col"
    >
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        ما در وب استودیو در تلاشیم با بکار بردن بروزترین تکنولوژی ها و در نظر گرفتن جزئیات کار، بهترین محصول را تحویل شما کارفرمایان عزیز دهیم و شما را از اعتماد به این مجموعه خرسند نماییم.
      </motion.p>
    </motion.div>
    <Hero />
  </div>
);

export default AboutUs;
