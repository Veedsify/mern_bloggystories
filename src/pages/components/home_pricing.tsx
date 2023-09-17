import HomePricingTitle from "./sub_components/home_pricing_title";
import HomePricingFeatures from "./sub_components/home_pricing_features";
import { Link } from "react-router-dom";
const HomePricing = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto mb-16 px-4 py-3 md:px-7 md:py-5 flex justify-center">
          <div className="bg-black bg-opacity-50 rounded-md home_pricing backdrop-blur-xl">
            <HomePricingTitle />
            <HomePricingFeatures />
            <div className="py-6 px-6 md:py-22 md:px-20 pb-16 text-white">
              <div className="border-t border-thin border-white ">
                <p className="text-center py-10">
                  Get started right now. all credit card and stripe payment
                  accepted
                </p>
                <div className="flex justify-center">
                  <Link
                    to="/pricing"
                    className="py-3 px-10 border rounded-md hover:bg-gray-700 duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePricing;
