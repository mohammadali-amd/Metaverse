import { motion } from 'framer-motion';

import PricingCard from '../components/PricingCard';
import { Explore, GetStarted, WhatsNew } from '../sections';

import About from '../sections/About';

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

const HeroText = {
  title: 'تعرفه ها',
  paragraph: `
  ما در مجموعه وب استودیو با تلاش برای پیاده سازی امکانات و ویژگی های مورد نظر کارفرمایان با مناسبترین قیمت ها فعالیت داریم. همچنین امکان پرداخت قسطی هزینه سایت را هم برای شما عزیزان فراهم نمودیم. در جداول زیر حدود قیمت طراحی سایت مورد نیاز شما آورده شده است، اما برای هر سایت با امکانات خاصی که کارفرما درخواست دارد ممکن است که این هزینه کم یا زیاد شود. به همین منظور برای اطلاع از قیمت پروژه و وبسایت خود با ما از طریق راه های ارتباطی که در وبسایت آمده در تماس باشید تا کارشناسان ما در سریعترین زمان ممکن پاسخگوی شما عزیزان باشند.
  `,
};

const Page = () => (
  <div>
    <WhatsNew />
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <Explore />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      {/* <Insights /> */}
      <About
        title={HeroText.title}
        paragraph={HeroText.paragraph}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="flex items-center justify-center py-8">
          <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:flex-row md:my-0 gap-8">
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
      <div className="gradient-04 z-0" />
    </div>
  </div>
);

export default Page;
