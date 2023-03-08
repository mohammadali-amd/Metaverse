'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 bg-white shadow-lg rounded-2xl p-6 bg-clip-padding bg-opacity-40`}>
      <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
      <Link className="font-extrabold text-[24px] leading-[30px] text-white" href="/about">
        وب استودیو
      </Link>
      <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
