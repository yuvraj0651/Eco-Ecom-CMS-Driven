const NewArrivalSkeleton = () => {
  return (
    <section className="py-10 animate-pulse">
      <div className="container mx-auto px-4">

        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <div className="h-10 w-72 bg-gray-300 rounded-md" />

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div className="w-10 h-10 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-3"
            >
              <div className="h-[18rem] rounded-md bg-gray-300" />

              <div className="flex gap-2 mt-4">
                <div className="w-5 h-5 rounded-full bg-gray-400" />
                <div className="w-5 h-5 rounded-full bg-gray-400" />
                <div className="w-5 h-5 rounded-full bg-gray-400" />
              </div>

              <div className="mt-4 space-y-3">
                <div className="h-5 w-40 bg-gray-300 rounded" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="h-8 w-24 rounded-full bg-gray-300" />
                <div className="h-4 w-32 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSkeleton;