import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Breadcrumb from "../../../UI/Breadcrumb/Breadcrumb";
import { LuTreePalm } from "react-icons/lu";
import LazyImage from "../../../UI/LazyImage/LazyImage";
import { useContext, useEffect } from "react";
import ThemeContext from "../../../context/Theme/ThemeContext";
import LeftQuote from "../../../../assets/about/qoute-l.webp";
import RightQuote from "../../../../assets/about/qoute-r.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutData } from "../../../API/About/AboutThunk";

const floatingImagePositions = {
  "top-left": "lg:w-[3rem] absolute top-9 left-0",
  "bottom-left": "lg:w-[3rem] absolute bottom-[120px] right-[110%]",
  "center-left": "lg:w-[3rem] absolute top-full left-[140px]",
  "bottom-right": "lg:w-[3rem] absolute right-[140px] -bottom-3",
  "top-right": "lg:w-[3rem] absolute right-0 top-10",
  "center-right": "lg:w-[3rem] absolute left-[110%] bottom-[120px]",
};

const buttonVariants = {
  primary:
    "border-2 border-[#ccc] shadow-sm py-1 px-3 rounded-full tracking-wide font-medium text-[0.9rem] lg:text-[1rem] bg-black text-white transition-colors duration-300 hover:bg-slate-50 hover:border-black hover:text-black",
  secondary:
    "border border-[#ccc] shadow-sm py-1 px-3 rounded-full tracking-wide font-medium text-[0.9rem] lg:text-[1rem] bg-slate-50 text-black transition-colors duration-300 hover:bg-black hover:border-white hover:text-white",
};

const AboutPage = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAboutData());
  }, [dispatch]);

  const { aboutData = [] } = useSelector((state) => state.about);
  const { homeData = [] } = useSelector((state) => state.home);

  const footerBanner = homeData?.footerBanner?.[0] || {};

  const darkLogo = footerBanner?.darkLogo;
  const lightLogo = footerBanner?.lightLogo;

  return (
    <section className="about pt-5 pb-8 bg-[#f9f9f9] dark:bg-slate-700">
      <div className="container mx-auto px-6 lg:px-1">
        <div className="about__wrapper">
          <div className="about__breadcrumb">
            <Breadcrumb />
          </div>
          <div className="about__banner grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 lg:gap-7 pt-5 pb-10">
            <div className="about__banner-text space-y-2 lg:space-y-4 relative overflow-visible">
              <div className="pointer-events-none absolute left-0 -top-5 lg:top-0 lg:left-0 h-[180px] w-[250px] lg:w-[300px] rounded-full bg-pink-200 dark:bg-emerald-300/40 opacity-40 lg:opacity-60 blur-[100px]" />
              <h4 className="about__banner-title tracking-wide text-center md:text-left font-semibold text-[1.5rem] lg:text-4xl capitalize relative z-30 dark:text-white">
                {aboutData?.aboutBanner?.title}
              </h4>
              <p className="about__banner-description text-center md:text-left leading-relaxed tracking-wide text-[0.9rem] lg:text-[0.95rem] text-gray-700 lg:pt-1 relative z-30 dark:text-white">
                {aboutData?.aboutBanner?.description}
              </p>
            </div>
            <div className="about__banner-thumb">
              <LazyImage
                src={aboutData?.aboutBanner?.bannerImage}
                alt={aboutData?.aboutBanner?.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="about__founder-grid">
            <div className="about__founder-text">
              <div className="about__founder-title flex items-center gap-[0.2rem] lg:gap-[0.4rem]">
                <LuTreePalm className="text-[1.8rem] lg:text-[2.5rem] dark:text-white" />
                <span className="tracking-wide capitalize font-medium text-[1.2rem] lg:text-[1.3em] -mb-[0.5rem] dark:text-white">
                  {aboutData?.foundersContent?.title}
                </span>
              </div>
              <p className="about__founder-description pt-3 leading-relaxed tracking-wide font-medium text-[0.9rem] lg:text-[1rem] text-gray-700 max-w-[35rem] w-full dark:text-white">
                {aboutData?.foundersContent?.subtitle}
              </p>
            </div>
            <div className="about__founder-group pt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7">
              {aboutData?.foundersData?.map((founder) => (
                <div
                  key={founder.id}
                  className="about__founder-card group dark:bg-slate-800 dark:border-slate-500 h-full flex flex-col border border-[#ccc] shadow-sm rounded-md bg-white p-2 cursor-pointer"
                >
                  <div className="about__founder-thumb overflow-hidden rounded-md h-[320px]">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="about__founder-content flex-1 px-2 pt-2">
                    <h4 className="font-medium tracking-wide text-[1rem] dark:text-white">
                      {founder.name}
                    </h4>
                    <p className="tracking-wide leading-relaxed font-medium text-[0.9rem] text-gray-700 dark:text-white">
                      {founder.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__fun-facts py-6 lg:py-14">
            <div className="about__fun-facts-text">
              <div className="about__fun-facts-title flex items-center gap-[0.2rem]">
                <div className="about__fun-facts-logo text-[1.7rem] lg:text-[1.9rem] dark:text-white">
                  🚀
                </div>
                <span className="tracking-wide dark:text-white capitalize font-medium text-[1.1rem] -mb-[0.5rem] lg:text-[1.3rem]">
                  {aboutData?.factsContent?.title}
                </span>
              </div>
              <p
                className="about__fun-facts-description pt-3 leading-relaxed tracking-wide font-medium text-[0.9rem] 
              lg:text-gray-700 lg:text-[1rem] max-w-[35rem] w-full dark:text-white"
              >
                {aboutData?.factsContent?.subtitle}
              </p>
            </div>
            <div className="about__fun-facts-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 pt-4 lg:pt-10">
              {aboutData?.factsData?.map((fact) => (
                <div
                  key={fact.id}
                  className="about__fun-facts-card dark:bg-slate-900 dark:border-slate-500 mb-5 border border-slate-50 shadow-sm bg-slate-100 py-4 px-4 space-y-3"
                >
                  <h4 className="font-medium tracking-wide text-[1.1rem] dark:text-white">
                    {fact.title}
                  </h4>
                  <p className="tracking-wide font-medium leading-relaxed text-[0.85rem] text-gray-700 dark:text-white">
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="about__testimonial-grid pb-12 lg:pt-14 lg:pb-28">
            <div className="about__testimonial-top-section text-center">
              <div className="about__testimonial-text space-y-1">
                <h4 className="about__testimonial-title tracking-wide font-semibold text-[1.4rem] lg:text-[1.8rem] dark:text-white">
                  {aboutData?.testimonialContent?.title}
                </h4>
                <p className="about__testimonial-subtitle tracking-wide leading-relaxed text-gray-700 text-[0.9rem] lg:text-[0.9rem] dark:text-white">
                  {aboutData?.testimonialContent?.subtitle}
                </p>
              </div>
            </div>
            <div className="about__testimonial-bottom-section relative md:w-[35rem] lg:w-[35rem] mx-auto">
              <div className="about__testimonial-floating-images-grid hidden lg:block">
                {aboutData?.testimonialImages?.subImages?.map((item) => (
                  <div
                    key={item?.id}
                    className={`about__testimonial-image ${floatingImagePositions[item?.position]}`}
                  >
                    <LazyImage
                      src={item?.image}
                      alt={item?.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="about__testimonial-thumb w-[5rem] lg:w-[6rem] mx-auto py-5 lg:py-10">
                <LazyImage
                  src={aboutData?.testimonialImages?.mainImage?.image}
                  alt="Testimonial thumb"
                  className="w-full h-auto object-cover"
                />
              </div>
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                // navigation={true}
                className="about__testimonial-slider [&_.swiper-pagination-bullet-active]:bg-slate-600 dark:[&_.swiper-pagination-bullet]:bg-slate-50 dark:[&_.swiper-pagination-bullet-active]:bg-red-600"
              >
                {aboutData?.testimonialData?.map((test) => (
                  <SwiperSlide key={test.id}>
                    <div className="about__testimonial-text overflow-hidden space-y-1">
                      <div className="about__testimonial-quotes relative">
                        <div className="left-quote w-[2rem] lg:w-[2.5rem] absolute left-0">
                          <LazyImage
                            src={LeftQuote}
                            alt="Testimonial Left Quote"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="right-quote w-[2rem] lg:w-[2.5rem] absolute right-0">
                          <LazyImage
                            src={RightQuote}
                            alt="Testimonial Right Quote"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                      <h4 className="tracking-wide text-center font-medium leading-[1.7rem] lg:leading-relaxed text-[1rem] lg:text-[1.3rem] max-w-[28rem] w-full mx-auto italic dark:text-white">
                        {test.description}
                      </h4>
                      <p className="tracking-wide font-medium text-[1rem] lg:text-[1.1rem] capitalize text-center pt-1 pb-12 lg:pt-4 dark:text-white">
                        {test.name}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="about__footer-banner px-1 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:items-center gap-4 lg:gap-7">
            <div className="about__footer-banner-content">
              {theme ? (
                <div className="about__footer-banner-logo w-[7rem]">
                  <LazyImage
                    src={darkLogo}
                    alt="About Footer Banner Logo"
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                <div className="about__footer-banner-logo w-[7rem]">
                  <LazyImage
                    src={lightLogo}
                    alt="About Footer Banner Logo"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              <div className="about__footer-banner-text pt-3 pb-4">
                <h4 className="font-semibold dark:text-white tracking-wide pb-2 text-[1.5rem] lg:text-[1.8rem] leading-8">
                  {footerBanner?.title}
                </h4>
                <p className="tracking-wide font-medium leading-5 text-[1rem] lg:text-[1rem] text-gray-700 lg:pt-1 lg:pb-1 dark:text-white">
                  {footerBanner?.description}
                </p>
              </div>
              <div className="about__footer-banner-cta flex items-center gap-1">
                {footerBanner?.buttons?.map((item) => (
                  <button key={item.id} className={buttonVariants[item?.variant]}>
                    {item?.text}
                  </button>
                ))}
              </div>
            </div>
            <div className="about__footer-banner-thumb pt-4 lg:pt-0 lg:max-w-[28rem] w-full">
              <LazyImage
                src={footerBanner?.image}
                alt={footerBanner?.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
