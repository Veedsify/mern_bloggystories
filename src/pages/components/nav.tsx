import { Link } from "react-router-dom";
import NavModal from "./sub_components/nav_modal";
import { useState } from "react";

const Navbar = () => {
  const [active, setIsActive] = useState<boolean>(false);

  const openNav = () => {
    setIsActive(true);
  };
  const closeNav = () => {
    setIsActive(false);
  };
  return (
    <>
      <nav className="fixed w-full z-50 bg-white bg-opacity-5 backdrop-blur-md px-4 py-3 md:px-7 md:py-5 mb-16 border-b border-gray-50">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex gap-2 items-center">
            <img src="/images/logo.svg" alt="logo" className="w-12" />
            <span className="font-bold text-white">BloggyStories</span>
          </Link>
          <img
            src="/images/menu.svg"
            alt=""
            className="w-12 cursor-pointer invert"
            onClick={openNav}
          />
        </div>
      </nav>
      <NavModal isOpen={active} closeNav={closeNav} />
    </>
  );
};

export default Navbar;
