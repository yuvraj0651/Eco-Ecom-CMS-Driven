// FooterShimmer.jsx

const FooterShimmer = () => {
  return (
    <footer className="border-t border-[#eee] py-10 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 animate-pulse">
          {/* Logo + Social */}
          <div className="space-y-4">
            <div className="w-[7rem] h-8 rounded-md bg-gray-200"></div>

            <div className="space-y-3 pt-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  <div className="w-20 h-3 rounded-full bg-gray-200"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {[1, 2, 3, 4, 5].map((column) => (
            <div key={column}>
              <div className="w-24 h-4 rounded-full bg-gray-200 mb-4"></div>

              <div className="space-y-3">
                {[1, 2, 3, 4].map((link) => (
                  <div
                    key={link}
                    className="w-20 h-3 rounded-full bg-gray-200"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterShimmer;