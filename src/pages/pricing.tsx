import ComparePlans from "./components/compare_plans";
import Footer from "./components/footer";
import PricingGetStarted from "./components/pricing_getstarted";
import PricingGrid from "./components/pricing_grid";
import PricingHero from "./components/pricing_hero";

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingGrid />
      <ComparePlans />
      <PricingGetStarted />
      <Footer />
    </>
  );
};

export default Pricing;
