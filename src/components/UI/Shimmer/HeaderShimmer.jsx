// HeaderShimmer.jsx

const HeaderShimmer = () => {
  return (
    <header className="border-b border-[#eee] bg-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between animate-pulse">
        {/* Logo */}
        <div className="w-[7rem] h-8 rounded-md bg-gray-200"></div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="w-14 h-4 rounded-full bg-gray-200"
            ></div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderShimmer;