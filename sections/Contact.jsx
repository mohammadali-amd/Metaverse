import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const contactUs = [
  { src: '/whatsapp.svg', alt: 'whatsapp', id: '0998 11 40 432', address: 'https://wa.me/09981140432' },
  { src: '/instagram.svg', alt: 'instagram', id: 'webstudio.official', address: 'https://www.instagram.com/webstudio.official' },
  { src: '/linkedin.svg', alt: 'linkedin', id: 'webstudio.official', address: '#' },
  { src: '/mail.svg', alt: 'mail', id: 'webstudio.ir@gmail.com', address: 'mailto:webstudio.ir@gmail.com' },
];

const Contact = () => {
  const inputStyles = 'mb-5 w-full rounded-lg bg-teal-300 px-5 py-3 placeholder-white';

  const { register, trigger, formState: { errors } } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="mx-auto w-5/6 pt-8 pb-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="relative">
          <div className="lg:gradient-03 z-0" />
        </div>
        <TypingText title="| تماس با ما" textStyles="text-center" />
        <TitleText title={<>راه های ارتباطی با ما</>} textStyles="text-center z-10" />

        <div className="flex justify-center pb-16">
          <motion.div
            variants={fadeIn('up', 'tween', 0.5, 1)}
            className="w-[18px] h-[28px] object-contain mt-[28px]"
          >
            <Image
              src="/arrow-down.svg"
              alt="arrow down"
              width={50}
              height={50}
            />
          </motion.div>
        </div>

        <div className="lg:flex lg:justify-between space-y-16 lg:space-y-0 py-12 z-10">

          {contactUs.map((item) => (
            <a target="_blank" href={item.address} className="grid justify-items-center space-y-6" rel="noreferrer">
              <Image
                src={item.src}
                alt={item.alt}
                width={50}
                height={50}
                className="w-[50px] h-[50px] object-contain"
              />
              <p className="text-2xl text-white">{item.id}</p>
            </a>
          ))}

        </div>
      </motion.div>

      <div>
        {/* Header */}
        <motion.div
          className="md:w-3/5 mt-[100px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="basis-3/5 font-montserrat text-5xl font-bold text-white">تماس با ما</h1>
        </motion.div>

        <div className="gradient-02 mt-[550px] z-0" />

        {/* Form & Image */}
        <div className="mt-10 justify-between gap-8 md:flex z-20">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0 z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/webstu.ir@gmail.com"
              method="POST"
            >
              {/* Name */}
              <input
                className={inputStyles}
                type="text"
                placeholder="نام شما"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
              <p className="-mt-3 mb-3 text-teal-400">
                {errors.name.type === 'required' && 'پر کردن این بخش الزامیست!'}
                {errors.name.type === 'maxLength' && 'حداکثر 100 کاراکتر مجاز هستید وارد کنید.'}
              </p>
              )}

              {/* Email */}
              <input
                className={inputStyles}
                type="text"
                placeholder="ایمیل"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
              <p className="-mt-3 mb-3 text-teal-400">
                {errors.email.type === 'required' && 'پر کردن این بخش الزامیست!'}
                {errors.email.type === 'pattern' && 'ایمیل وارد شده اشتباه است.'}
              </p>
              )}

              {/* Message */}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="پیام"
                {...register('message', {
                  required: true,
                  maxLength: 200,
                })}
              />
              {errors.message && (
              <p className="-mt-3 mb-3 text-teal-400">
                {errors.message.type === 'required' && 'پر کردن این بخش الزامیست!'}
                {errors.message.type === 'maxLength' && 'حداکثر 200 کاراکتر مجاز هستید وارد کنید.'}
              </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-teal-500 hover:bg-teal-700 px-20 py-3 transition duration-500 text-white"
              >
                ارسال
              </button>
            </form>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full">
              <Image
                src="/contact-pic.jpg"
                alt="contact-us-page-graphic"
                width={500}
                height={500}
                className="w-full rounded-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
