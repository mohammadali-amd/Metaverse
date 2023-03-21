import { motion } from 'framer-motion';
import Link from 'next/link';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="md:py-16 px-6 py-12 relative"
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="text-[18px] font-bold text-white hidden lg:flex gap-10">
          <Link href="/#top" scroll={false}>صفحه اصلی</Link>
          <Link href="/#portfolio" scroll={false}>نمونه کار ها</Link>
          <Link href="/#pricing" scroll={false}>تعرفه ها</Link>
          <Link href="/about-us">درباره ما</Link>
          <Link href="/contact-us">تماس با ما</Link>
        </div>
        <Link href="/contact-us" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
          <img
            src="headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            با ما در تماس باشید
          </span>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/#top" scroll={false} className="font-extrabold text-[24px] text-white">وب استودیو</Link>
          <p className="font-normal text-[14px] text-white opacity-50">
            تمامی حقوق این سایت متعلق به <Link href="/#top" scroll={false} className="text-teal-300">وب استودیو</Link> می باشد.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} target="_blank" href={social.url} rel="noreferrer">
                <img
                  key={social.name}
                  src={social.pic}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
