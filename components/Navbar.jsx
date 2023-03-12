'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const links = [
  { name: 'صفحه اصلی', slug: 'sdf' },
  { name: ' نمونه کار ها', slug: 'asdfsdbc' },
  { name: 'تعرفه ها', slug: 'abwwc' },
  { name: 'درباره ما', slug: 'aasdbc' },
  { name: 'تماس با ما', slug: 'asda' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.xPaddings} py-8 relative`}
    >
      {/* Gradient */}
      <div className="absolute w-[50%] inset-0 gradient-01" />

      {/* Desktop Menu */}
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8 bg-white text-white shadow-lg rounded-2xl px-6 py-3 bg-clip-padding bg-opacity-40`}>
        <ul className="hidden lg:flex gap-16 font-extrabold text-[21px] leading-[30px]  z-[2]">
          {links.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link href="/">
          <img src="Logo.png" alt="logo" className="w-[60px] md:w-[90px] object-contain" />
        </Link>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div onClick={() => setNav(true)}>
            <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
          </div>
          {nav && (
            <motion.div
              whileInView={{ x: [-300, 0] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className={nav ? 'fixed left-0 top-0 w-[80%] z-20 h-full border-r border-r-gray-900 bg-[#000300] opacity-[85%]' : 'fixed left-[-100%]'}
            >
              <div onClick={() => setNav(false)} className="flex justify-end m-6">
                <img src="/close.svg" alt="close" className="w-[50px] h-[50px]" />
              </div>
              <ul className="mt-6">
                {links.map((item) => (
                  <li key={item.slug} className="text-xl p-4 border-b border-gray-600">
                    <Link href={item.slug}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
