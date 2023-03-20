import { motion } from 'framer-motion';
import { TypingText } from '.';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const PricingTxet = () => (
  <section className={`${styles.paddings} relative z-10`} id="pricing">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| تعرفه ها"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        ما در مجموعه وب استودیو با تلاش برای پیاده سازی امکانات و ویژگی های مورد نظر کارفرمایان با مناسبترین قیمت ها فعالیت داریم. 😉✌
        <br />
        همچنین امکان پرداخت قسطی هزینه سایت، اپلیکیشن و دیگر خدمات  را هم فراهم نمودیم تا امکان استفاده از خدمات برای تمامی عزیزان فراهم باشد. ✅💖
        <br />
        در جداول زیر حدود قیمت طراحی سایت مورد نیاز شما آورده شده است، اما برای هر سایت با امکانات خاصی که کارفرما درخواست دارد ممکن است که این هزینه کم یا زیاد شود. به همین منظور برای اطلاع از قیمت پروژه و وبسایت خود با ما از طریق راه های ارتباطی که در وبسایت آمده در تماس باشید تا کارشناسان ما در سریعترین زمان ممکن پاسخگوی شما عزیزان باشند. 👌📊
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

export default PricingTxet;
