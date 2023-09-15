import { Link } from "react-router-dom";

const HomeGetStarted = () => {
  return (
    <>
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center mb-20 px-4 py-3 md:px-7 md:py-5">
          <div className="get_started_home text-center p-16 md:p-28 text-white">
            <h2 className="font-medium text-3xl md:text-4xl mb-5 OF">
              Sound Good?
            </h2>
            <p className="text-base text-center md:text-lg mb-6">
              Click below to get started. no credit card required
            </p>
            <Link
              className="inline-block py-5 px-10 rounded bg-red-500 text-white"
              to="/"
            >
              Choose a start
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeGetStarted;
