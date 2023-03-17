import PricingCard from '../../components/PricingCard';

const pricingData = [
  {
    color: 'slate-700',
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
    color: 'violet-600',
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
    color: 'slate-700',
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

const Prices = () => (
  <div className="py-12">
    <div className="flex items-center justify-center">
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
  </div>
);

export default Prices;
