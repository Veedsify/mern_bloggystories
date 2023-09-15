const HomeFeatures = () => {
  return (
    <>
      <section className="py-10" id="home_features">
        <div className="max-w-screen-xl mx-auto mb-16 mt-14 px-4 py-3 md:px-7 md:py-5 flex justify-center">
          <div className="home_features rounded-md-md">
            {/* GRID CONTAINERS */}
            <div className="w-full max-w-md md:max-w-none mb-14 md:m-0 grid grid-cols-1 md:grid-cols-2 bg-black bg-opacity-50">
              <img
                src="/images/img1.jpg"
                className="aspect-4x3 md:aspect-square lg:aspect-video object-cover"
                alt=""
              />
              <div className="flex flex-col items-center justify-center p-10 text-center text-white">
                <h2 className="text-3xl font-medium OF mb-3">Simple</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus, commodi.
                </p>
              </div>
            </div>
            <div className="max-w-md md:max-w-none mb-14 md:m-0 grid grid-cols-1 md:grid-cols-2 bg-black bg-opacity-50">
              <img
                src="/images/img2.jpg"
                className="w-full aspect-4x3 md:aspect-square lg:aspect-video object-cover md:order-1"
                alt=""
              />
              <div className="flex flex-col items-center justify-center p-10 text-center text-white">
                <h2 className="text-3xl font-medium OF mb-3">Simple</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus, commodi.
                </p>
              </div>
            </div>
            <div className="max-w-md md:max-w-none mb-14 md:m-0 grid grid-cols-1 md:grid-cols-2 bg-black bg-opacity-50">
              <img
                src="/images/img3.jpg"
                className="w-full aspect-4x3 md:aspect-square lg:aspect-video object-cover"
                alt=""
              />
              <div className="flex flex-col items-center justify-center p-10 text-center text-white">
                <h2 className="text-3xl font-medium OF mb-3">Simple</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus, commodi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFeatures;
