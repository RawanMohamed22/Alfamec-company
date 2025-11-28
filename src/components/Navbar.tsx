import { NavLink } from "react-router-dom";
import companyLogo from "../assets/logo2.jpg";
import { useState } from "react";
import { Pages } from "../data";
import { MenuIcon } from "../Icons";

const Navbar = () => {
  const [open, setIsOpen] = useState(false);

  const PagesRender = Pages.map(({title ,to} , idx) => (
    <li key={idx} className="hover:text-[#55F229] transition py-1 lg:py-0">
      <NavLink to={to}>{title}</NavLink>
    </li>
  ));

  return (
    <>
      <nav className="flex justify-between items-center lg:px-7 xl:px-20 mx-auto bg-[#FFFFFF] py-2 sticky top-0 left-0 right-0 shadow-md shadow-black/25 z-20">
        <div className="flex items-center">
          <img src={companyLogo} className="w-36" alt="Alfamec company logo" />
          <h2 className="text-xl font-bold text-[#03318C] uppercase">
            alfamec company
          </h2>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex space-x-10  text-[#03318C] font-medium text-lg capitalize">
            {PagesRender}
          </ul>
        </div>
        <button
          className="text-4xl text-[#03318C] hover:text-[#55F229] transition-colors lg:hidden"
          onClick={() => setIsOpen(!open)}
        >
          <MenuIcon />
        </button>
      </nav>
      <ul
        className={` lg:hidden bg-white text-[#03318C] font-medium text-lg capitalize px-5 space-y-2  transition-all duration-300 ease-in-out ${
          open
            ? "translate-y-0 max-h-64 opacity-100"
            : "translate-y-2 max-h-0 opacity-0"
        }`}
      >
        {PagesRender}
      </ul>
    </>
  );
};

export default Navbar;
