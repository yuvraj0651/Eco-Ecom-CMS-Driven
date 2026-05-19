import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LazyImage from "../../../../UI/LazyImage/LazyImage";
import { useSelector } from "react-redux";
import { colorMap } from "../New-Arrivals/ColorMap";
import { useEffect, useState } from "react";

const NewArrivals = () => {
  const [activeColor, setActiveColor] = useState({});
  const { homeData = [] } = useSelector((state) => state.home);

  useEffect(() => {
    if(homeData?.newArrivals?.length){
      const initial = {};
      homeData.newArrivals.forEach((p) => {
        initial[p.id] = p.colors?.[0];
      });
      setActiveColor(initial);
      console.log(initial);
    }
  } , [homeData]);

  const handleColorClick = (productId, color) => {
    setActiveColor((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  return (
    <section className="new-arrivals pt-5 pb-10 lg:section-padding">
      <div className="container mx-auto px-8 lg:px-2">
        <div className="new-arrivals__wrapper">
          <div className="new-arrivals__top-section flex lg:items-center flex-col lg:flex-row lg:justify-between">
            <div className="new-arrivals__text">
              <h4 className="new-arrivals__title font-medium tracking-wide leading-7 lg:leading-[2.5rem] text-[1.27rem] lg:text-[2rem] dark:text-white">
                New Arrivals.{" "}
                <span className="text-gray-500 dark:text-white">
                  New Sports equipments
                </span>
              </h4>
            </div>
            <div className="new-arrivals__buttons-grid flex items-center justify-end gap-1">
              <div className="new-arrivals__prev-button">
                <button
                  aria-label="Previous Button"
                  className="prev-btn border border-[#ccc] shadow-sm w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:bg-black hover:text-white dark:bg-slate-900 dark:border-slate-500"
                >
                  <HiOutlineArrowNarrowLeft className="text-[1.1rem] dark:text-white" />
                </button>
              </div>
              <div className="new-arrivals__next-button">
                <button
                  aria-label="Next Button"
                  className="next-btn border border-[#ccc] shadow-sm w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:bg-black hover:text-white dark:bg-slate-900 dark:border-slate-500"
                >
                  <HiOutlineArrowNarrowRight className="text-[1.1rem] dark:text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="new-arrivals__bottom-section pt-10 pb-5">
            <div className="new-arrivals__products-grid">
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={4}
                loop={false}
                speed={800}
                grabCursor={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".prev-btn",
                  nextEl: ".next-btn",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 12,
                  },
                  480: {
                    slidesPerView: 1.5,
                    spaceBetween: 14,
                  },

                  640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },

                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 18,
                  },

                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },

                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
              >
                {homeData?.newArrivals?.map((product) => (
                  <SwiperSlide key={product?.id}>
                    <article className="new-arrivals__product-card border border-[#ccc] shadow-sm p-1 rounded-md dark:bg-slate-700 dark:border-slate-500 cursor-pointer transition-all duration-300 hover:-translate-y-1">
                      <div className="new-arrivals__product-thumb">
                        <LazyImage
                          src={product?.image}
                          alt="New Arrival Product Thumb"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="new-arrivals__product-content p-4 space-y-3">
                        <div className="new-arrivals__product-color-grid flex items-center gap-2">
                          {product?.colors?.map((color, index) => {
                            const isActive = activeColor[product.id] === color;
                            return (
                              <div
                                key={index}
                                className={`new-arrival__color-block cursor-pointer rounded-full p-[0.1rem] 
                            ${isActive ? "ring-2 ring-slate-900 dark:ring-white" : ""}`}
                              >
                                <div
                                  onClick={() =>
                                    handleColorClick(product.id, color)
                                  }
                                  className={`product-color border border-[#ccc] w-[1.4rem] h-[1.4rem] rounded-full shadow-sm 
                                  ${colorMap[color] || "bg-gray-300"}`}
                                ></div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="new-arrival__product-text py-2">
                          <h4 className="product-title capitalize font-medium tracking-wide text-[0.9rem] lg:text-[1rem] dark:text-white">
                            {product?.title}
                          </h4>
                          <div className="product-brand capitalize py-1 tracking-wide font-medium text-gray-600 text-[0.9rem] dark:text-amber-500">
                            {product?.brand}
                          </div>
                        </div>
                        <div className="new-arrival__product__product-meta flex items-center justify-between">
                          <div className="new-arrival__product-price border-2 border-green-600 dark:border-white py-[0.1rem] px-3 rounded-full">
                            <span className="text-green-700 font-medium tracking-wide text-[0.85rem] dark:text-white">
                              ${(product?.price).toFixed(2)}
                            </span>
                          </div>
                          <div className="new-arrival__product-rating flex items-center gap-1">
                            <span className="text-[0.9rem] font-medium tracking-wide dark:text-white">
                              ⭐ {product?.rating}
                            </span>
                            <span className="text-[0.9rem] font-medium tracking-wide dark:text-white">
                              ({product?.reviews} reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
