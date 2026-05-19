// FeaturesSkeleton.jsx

const FeaturesSkeleton = () => {
  return (
    <section className="py-10 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-5 shadow-sm"
            >
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto" />

              <div className="flex justify-center mt-4">
                <div className="h-6 w-16 rounded-md bg-gray-300" />
              </div>

              <div className="mt-5 space-y-3">
                <div className="h-5 bg-gray-300 rounded w-40 mx-auto" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSkeleton;