import { Link } from "react-router-dom";
import React from "react";

type NavModal = {
  isOpen: boolean;
  closeNav: () => void;
};

const NavModal: React.FC<NavModal> = ({ isOpen, closeNav }) => {
  return (
    <>
      <div
        className={`fixed bg-gradient z-50 top-0 bottom-0 h-full min-h-screen w-full flex items-center md:justify-center px-4 py-3 md:px-7 md:py-5 opacity-0 pointer-events-none -translate-y-4 duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : ""
        }`}
      >
        <div className="absolute right-5 top-5">
          <img
            src="/images/close_menu.svg"
            className="w-14 cursor-pointer invert"
            alt=""
            onClick={closeNav}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full md:max-w-7xl text-white">
          <Link
            to="/login"
            onClick={closeNav}
            className="w-full block px-4 py-5 md:px-14 md:py-16 border-b md:border hover:bg-gray-50 hover:bg-opacity-10"
          >
            <h2 className="text-xl md:text-3xl font-medium mb-2">Login</h2>
            <span className="text-sm md:text-lg">
              Log in to and existing account
            </span>
          </Link>
          <Link
            to="/signup"
            onClick={closeNav}
            className="w-full block px-4 py-5 md:px-14 md:py-16 border-b md:border hover:bg-gray-50 hover:bg-opacity-10"
          >
            <h2 className="text-xl md:text-3xl font-medium mb-2">Signup</h2>
            <span className="text-sm md:text-lg">
              Create a free account, to start sharing with us
            </span>
          </Link>
          <Link
            to="/pricing"
            onClick={closeNav}
            className="w-full block px-4 py-5 md:px-14 md:py-16 border-b md:border hover:bg-gray-50 hover:bg-opacity-10"
          >
            <h2 className="text-xl md:text-3xl font-medium mb-2">Go Pro</h2>
            <span className="text-sm md:text-lg">
              Select the best plan for you
            </span>
          </Link>
          <Link
            to="/articles"
            onClick={closeNav}
            className="w-full block px-4 py-5 md:px-14 md:py-16 border-b md:border hover:bg-gray-50 hover:bg-opacity-10"
          >
            <h2 className="text-xl md:text-3xl font-medium mb-2">Articles</h2>
            <span className="text-sm md:text-lg">
              Read stories and articles, and check out the authors behind them
            </span>
          </Link>
          <Link
            to="/shop"
            onClick={closeNav}
            className="w-full block px-4 py-5 md:px-14 md:py-16 border-b md:border hover:bg-gray-50 hover:bg-opacity-10"
          >
            <h2 className="text-xl md:text-3xl font-medium mb-2">Shop</h2>
            <span className="text-sm md:text-lg">
              Check out products from our authors
            </span>
          </Link>
          <Link
            to="/contact"
            onClick={closeNav}
            className="w-full block px-4 py-5 md:px-14 md:py-16 border-b md:border hover:bg-gray-50 hover:bg-opacity-10"
          >
            <h2 className="text-xl md:text-3xl font-medium mb-2">Contact Us</h2>
            <span className="text-sm md:text-lg">
              Submit a request of just say HI
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavModal;
