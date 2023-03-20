import { motion } from 'framer-motion';

import PricingCard from '../components/PricingCard';
import PricingTxet from '../components/pricingText';
import { Explore, GetStarted, WhatsNew } from '../sections';

import { staggerContainer } from '../utils/motion';

const pricingData = [
  {
    type: 'پلن حرفه ای',
    title: 'وبسایت شرکتی ',
    price: 'از 18',
    CTA: '1 سال پشتیبانی رایگان',
    data: [
      'دامنه رایگان ir',
      'پشتیبانی رایگان برای مدت 1 سال',
      'طراحی قالب اختصاصی',
      'طراحی کاملا ریسپانسیو و واکنش گرا',
    ],
  },
  {
    color: 'rgb(124 58 237)',
    type: 'ویژه کسب و کار ها',
    title: 'وبسایت فروشگاهی',
    price: 'بین 12 تا 20',
    CTA: 'طراحی قالب اختصاصی',
    data: [
      'دامنه رایگان ir',
      'پشتیبانی رایگان برای مدت 6 ماه',
      'طراحی قالب اختصاصی',
      'طراحی کاملا ریسپانسیو و واکنش گرا',
    ],
  },
  {
    type: 'پلن اقتصادی',
    title: 'وبسایت شخصی/وبلاگ',
    price: 'بین 8 تا 14',
    CTA: 'دامنه رایگان ir.',
    data: [
      'دامنه رایگان ir',
      'پشتیبانی رایگان برای مدت 6 ماه',
      'طراحی قالب اختصاصی',
      'طراحی کاملا ریسپانسیو و واکنش گرا',
    ],
  },
];

const Page = () => (
  <div>
    <WhatsNew />
    <div className="relative">
      <div className="gradient-03 z-0" />
      <GetStarted />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Explore />
    </div>
    <div className="relative">
      {/* <Insights /> */}
      <div className="gradient-03 z-0" />
      <PricingTxet />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="flex items-center justify-center py-8 z-20">
          <div className="flex flex-col my-6 md:flex-row md:my-0 gap-8">
            {pricingData.map((item) => (
              <PricingCard
                key={item.type}
                color={item.color}
                type={item.type}
                title={item.title}
                price={item.price}
                CTA={item.CTA}
                data={item.data}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Page;
