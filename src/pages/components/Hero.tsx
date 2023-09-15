import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="py-10 min-h-screen">
        <div className="max-w-screen-xl mx-auto mb-20 px-4 py-3 md:px-7 md:py-5">
          <div className="mt-16 md:mt-52 flex flex-col items-center text-white ">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="w-32 md:w-40 block mb-8"
            />
            <h2 className="OF mb-12 text-3xl md:text-6xl font-medium tracking-widest">
              BloggyStories
            </h2>
            <p className="max-w-xl text-center mb-8">
              Unlock Your Creative Potential and Share Your Stories with the
              World
            </p>
            <div className="flex flex-col w-80 gap-3 text-center p-2">
              <Link
                to="/pricing"
                className="px-12 py-4 inline-block rounded-md bg-red-500 text-white text-lg hover:bg-red-400 duration-150 
                "
              >
                Get Started
              </Link>
              <Link
                to="/"
                className="px-12 py-4 inline-block rounded-md border border-white text-white text-lg duration-150 hover:bg-gray-100 hover:text-black
                "
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-16">
          <a
            href="#home_about"
            className="block rounded-md py-3 px-8 text-sm border text-white what-is"
          >
            What is bloggystories?
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
