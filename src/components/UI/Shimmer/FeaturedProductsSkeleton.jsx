// FeaturedProductsSkeleton.jsx

const FeaturedProductsSkeleton = () => {
  return (
    <section className="py-10 animate-pulse">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div className="h-10 w-80 bg-gray-300 rounded-md" />

          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div className="w-10 h-10 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-3"
            >
              <div className="h-48 rounded-md bg-gray-300" />

              <div className="grid grid-cols-3 gap-2 mt-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-24 rounded-md bg-gray-300"
                  />
                ))}
              </div>

              <div className="space-y-3 mt-5">
                <div className="h-5 w-48 bg-gray-300 rounded" />
                <div className="h-4 w-28 bg-gray-200 rounded" />
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="h-8 w-24 rounded-full bg-gray-300" />
                <div className="h-4 w-28 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSkeleton;