import Hero from "./components/Hero";
import Footer from "./components/footer";
import HomeAbout from "./components/home_about";
import HomeFeatures from "./components/home_features";
import HomeGetStarted from "./components/home_getstarted";
import HomePricing from "./components/home_pricing";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeFeatures />
      <HomePricing />
      <HomeGetStarted />
      <Footer />
    </>
  );
};

export default Home;
