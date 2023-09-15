import { Link } from "react-router-dom";

const PricingGetStarted = () => {
  return (
    <>
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center  px-4 py-3 md:px-7 md:py-5">
          <p className="text-2xl font-medium mb-10 or">OR</p>
          <div className="get_started_home text-center p-16 md:p-28 rounded bg-white">
            <h2 className="font-medium text-3xl md:text-4xl mb-5 OF">
              Try Pro free for 7 days
            </h2>
            <p className="text-base text-center md:text-lg max-w-md mb-6">
              Click below to get started, with top pro features curated just for
              you
            </p>
            <Link
              className="inline-block py-3 px-10 rounded bg-red-500 text-white"
              to="/"
            >
              Start Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingGetStarted;
