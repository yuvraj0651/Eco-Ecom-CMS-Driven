// BannerSkeleton.jsx

const BannerSkeleton = () => {
  return (
    <section className="banner py-4 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-green-100 rounded-md p-8 lg:p-12 min-h-[28rem]">
          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <div className="h-5 w-48 bg-gray-300 rounded-md" />

            <div className="space-y-3">
              <div className="h-10 w-[22rem] bg-gray-300 rounded-md" />
              <div className="h-10 w-[18rem] bg-gray-300 rounded-md" />
            </div>

            <div className="h-12 w-44 bg-gray-400 rounded-full mt-6" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="w-[24rem] h-[24rem] rounded-[3rem] bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSkeleton;
