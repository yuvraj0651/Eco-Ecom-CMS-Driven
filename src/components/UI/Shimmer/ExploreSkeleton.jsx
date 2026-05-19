// ExploreSkeleton.jsx

const ExploreSkeleton = () => {
  return (
    <section className="py-16 bg-gray-100 animate-pulse">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <div className="h-10 w-56 bg-gray-300 rounded mx-auto mb-10" />

        {/* TABS */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-12 w-28 rounded-full bg-gray-300"
            />
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-5 border"
            >
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 rounded-full bg-gray-300" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
              </div>

              <div className="mt-8 space-y-3">
                <div className="h-4 w-28 bg-gray-200 rounded" />
                <div className="h-5 w-40 bg-gray-300 rounded" />
              </div>

              <div className="h-4 w-24 bg-gray-200 rounded mt-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSkeleton;