import { GetStarted, WhatsNew } from '../sections';

const Page = () => (
  <div>
    <WhatsNew />
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      {/* <Insights /> */}
      <div className="gradient-04 z-0" />
    </div>
  </div>
);

export default Page;
