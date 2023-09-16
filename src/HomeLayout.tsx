import "./assets/css/home.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/components/nav";
import Home from "./pages/home";
import Articles from "./pages/articles";
import CategoryPage from "./pages/category";
import ShopPage from "./pages/shop";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Pricing from "./pages/pricing";

const HomeLayout = () => {
  return (
    <div className="contents">
      <div className="bg"></div>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/product/:id" element={} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default HomeLayout;
