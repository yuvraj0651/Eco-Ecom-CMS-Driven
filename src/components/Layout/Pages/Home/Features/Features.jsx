import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "../../../../services/HomePageApi";
import LazyImage from "../../../../UI/LazyImage/LazyImage";
import FeatureShimmer from "../../../../UI/Shimmer/FeaturesSkeleton";
import { useSelector } from "react-redux";

const Features = () => {
  const { homeData = [] } = useSelector((state) => state.home);

  return (
    <section className="features py-5 lg:section-padding">
      <div className="container mx-auto px-2">
        <div className="features__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 lg:gap-8">
          {homeData?.features?.map((feature) => (
            <article
              key={feature?.id}
              className="features__card border border-white/20 backdrop-blur-sm p-4 rounded-md shadow-sm bg-white/10 flex flex-col flex-1 h-full transition-all duration-300 lg:hover:-translate-y-1 lg:hover:shadow-lg cursor-pointer"
            >
              <div className="features__image w-[7rem] mx-auto">
                <LazyImage
                  src={feature?.image}
                  alt={feature?.title}
                  className="w-full h-auto object-cover dark:rounded-full"
                />
              </div>
              <div className="features__content text-center pt-3 space-y-3">
                <div className="features__badge">
                  <span
                    className={`border border-[#ccc] shadow-sm py-[0.3rem] px-3 rounded-sm capitalize font-medium tracking-wide text-[0.75rem] ${feature?.badgeBg} ${feature?.badgeTextColor}`}
                  >
                    {feature?.badge}
                  </span>
                </div>
                <div className="features__text">
                  <h4 className="features__title mb-2 capitalize font-[500] tracking-wide text-[0.95rem] dark:text-white">
                    {feature?.title}
                  </h4>
                  <p className="features__description text-gray-600 tracking-wide text-[0.9rem] dark:text-white">
                    {feature?.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
