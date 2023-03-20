import { Hero, About } from '../../sections';

const HeroText = {
  title: 'درباره ما',
  paragraph: `
  مجموعه وب استودیو از سال 1400 فعالیت خود را در حوزه طراحی وب و برنامه نویسی شروع کرده و با شور و اشتیاق به فعالیت خود در این زمینه ادامه می دهد. 
  `,
};

const AboutUs = () => (
  <div className="py-12">
    <div className="gradient-02 mt-[500px] z-0" />
    <div className="gradient-04 mt-[400px] z-0" />
    <About
      title={HeroText.title}
      paragraph={HeroText.paragraph}
    />
    <Hero />
  </div>
);

export default AboutUs;
