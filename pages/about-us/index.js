import Head from 'next/head';
import { Hero, About } from '../../sections';

const AboutUs = () => (
  <div className="py-12">
    <Head>
      <title>Web Studio - About Us</title>
    </Head>
    <div className="gradient-02 mt-[500px] z-0" />
    <div className="relative">
      <div className="gradient-04 mt-[400px] z-0" />
    </div>
    <About />
    <Hero />
  </div>
);

export default AboutUs;
