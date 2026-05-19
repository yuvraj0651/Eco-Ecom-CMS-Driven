import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiMagnifyingGlass } from "react-icons/hi2";
import LazyImage from "../../../../UI/LazyImage/LazyImage";
import { Link } from "react-router";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "../../../../services/HomePageApi";
import BannerSkeleton from "../../../../UI/Shimmer/BannerSkeleton";
import { useSelector } from "react-redux";

const Banner = () => {

  const {homeData = [] , fetchLoading , error} = useSelector((state) => state.home);

  return (
    <section className="banner font-poppins">
      <div className="container mx-auto px-4 rounded-xl">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          spaceBetween={0}
          speed={800}
          slidesPerView={1}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          navigation={{
            prevEl: ".banner__prev-btn",
            nextEl: ".banner__next-btn",
          }}
        >
          {homeData?.banners?.map((banner) => (
            <SwiperSlide key={banner?.id}>
              <div
                className={`banner__wrapper grid items-center grid-cols-1 md:grid-cols-2 ${banner?.textColor} dark:bg-slate-800 overflow-hidden`}
                style={{backgroundColor: banner?.bannerColor}}
              >
                <div className="banner__content py-5 px-6 lg:pl-9">
                  <div className="banner__text">
                    <h4 className="banner__subtitle text-base smLg:text-lg md:text-xl lg:text-[1.35rem] font-semibold tracking-wide dark:text-white xxl:text-[1.2rem]">
                      {banner?.subTitle}
                    </h4>
                    <h2 className="banner__title py-2 font-bold text-xl md:text-3xl lg:text-[3.2rem] lg:leading-[3.2rem] leading-tight md:leading-snug dark:text-white xxl:text-[2.6em] xxl:py-1">
                      {banner?.title}
                    </h2>
                  </div>
                  <div className="banner__cta pt-3 lg:pt-7">
                    <Link to={banner?.btnLink}>
                      <button
                        type="button"
                        className=" border border-[#ccc] shadow-sm flex items-center gap-1 py-[0.6rem] px-4 rounded-[25px] bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                      >
                        <span className="font-semibold lg:pb-1 tracking-wide text-[0.8rem] lg:text-[0.9rem] lg:px-2">
                          {banner?.btnText}
                        </span>
                        <HiMagnifyingGlass className="text-md lg:text-xl" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="banner__image">
                  <LazyImage
                    src={banner?.image}
                    alt={banner?.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="banner__navigation mt-6 mb-4 flex items-center justify-center">
          <div className="banner__button-grid flex items-center gap-1">
            <button
              type="button"
              aria-label="Banner Left Slide Button"
              className="banner__prev-btn border border-[#ccc] shadow-sm w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-black hover:text-white"
            >
              <HiOutlineArrowNarrowLeft />
            </button>
            <button
              type="button"
              aria-label="Banner Right Slide Button"
              className="banner__next-btn border border-[#ccc] shadow-sm w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-black hover:text-white"
            >
              <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
