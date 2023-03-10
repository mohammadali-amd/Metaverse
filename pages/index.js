import { Footer, Navbar } from '../components';
import { Explore, Feedback, GetStarted, Hero, WhatsNew } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <WhatsNew />
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      {/* <About /> */}
      <div className="gradient-04 z-0" />
      <Hero />
    </div>
    {/* <World /> */}
    <div className="relative">
      {/* <Insights /> */}
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
