// FooterBannerSkeleton.jsx

const FooterBannerSkeleton = () => {
  return (
    <section className="py-14 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="w-32 h-10 bg-gray-300 rounded mb-6" />

            <div className="space-y-4">
              <div className="h-10 w-[25rem] bg-gray-300 rounded" />
              <div className="h-5 w-[20rem] bg-gray-200 rounded" />
            </div>

            <div className="flex gap-3 mt-8">
              <div className="h-10 w-36 rounded-full bg-gray-300" />
              <div className="h-10 w-36 rounded-full bg-gray-300" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-[22rem] rounded-md bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default FooterBannerSkeleton;
