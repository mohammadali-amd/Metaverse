import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const links = [
  { name: 'صفحه اصلی', slug: '/#top' },
  { name: ' نمونه کار ها', slug: '/#portfolio' },
  { name: 'تعرفه ها', slug: '/#pricing' },
  { name: 'درباره ما', slug: 'about-us' },
  { name: 'تماس با ما', slug: 'contact-us' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [padding, setPadding] = useState('pt-8');

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.xPaddings} ${padding} relative`}
      id="top"
    >
      {/* Gradient */}
      <div className="absolute w-[50%] inset-0 gradient-01" />

      {/* Desktop Menu */}
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8 bg-gray-300 text-white shadow-lg rounded-2xl px-6 py-3 bg-clip-padding bg-opacity-30`}>
        <ul className="hidden lg:flex gap-16 font-extrabold text-[21px] leading-[30px] z-[2]">
          {links.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug} scroll={false} legacyBehavior onClick={() => setPadding('pt-18')}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link href="/" className="z-10 hidden lg:block">
          <img src="Logo.png" alt="logo" className="w-[60px] md:w-[90px] object-contain" />
        </Link>

        {/* Mobile Menu */}
        <div className="flex items-center mx-auto gap-[200px] lg:hidden z-[20]">
          {/* Logo */}
          <img src="/menu.svg" alt="menu" onClick={() => setNav(true)} className="w-[24px] h-[24px] object-contain" />
          <Link href="/#top" className="z-10">
            <img src="Logo.png" alt="logo" className="w-[60px] md:w-[90px] object-contain" />
          </Link>
          {nav && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className={nav ? 'fixed right-0 top-0 w-[85%] z-20 h-full border-r border-r-gray-900 bg-[#000300] opacity-[85%]' : 'fixed right-[-100%]'}
            >
              <div onClick={() => setNav(false)} className="flex justify-end m-6">
                <Link href="/">
                  <img src="/close.svg" alt="close" className="w-[50px] h-[50px]" />
                </Link>
              </div>
              <ul className="mt-6">
                {links.map((item) => (
                  <li key={item.slug} onClick={() => setNav(false)} className="text-xl p-4 border-b border-gray-600">
                    <Link href={item.slug} scroll={false} legacyBehavior>{item.name}</Link>
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
