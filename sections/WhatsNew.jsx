import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className="px-6 py-8 md:pt-0 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col-reverse lg:flex-row gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| به وب استودیو خوش آمدید" />
        <TitleText title={<>طراحی وبسایت و ارائه خدمات دیجیتال</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="/Hero-Image.svg"
          alt="Hero-Image"
          className="w-[90%] h-[90%] object-contain"
          width={100}
          height={100}
          priority
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
