import { NavLink } from "react-router-dom";
import companyLogo from "../assets/logo2.jpg";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center lg:px-7 xl:px-20 mx-auto bg-[#FFFFFF] py-2 sticky top-0 left-0 right-0 shadow-md shadow-black/25 z-20">
        <div className="flex items-center">
          <img src={companyLogo} className="w-36" />
          <h2 className="text-xl font-bold text-[#03318C] uppercase">
            alfamec company
          </h2>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex space-x-10  text-[#03318C] font-medium text-lg capitalize">
            <li className="hover:text-[#55F229] transition">
              <NavLink to="/">home</NavLink>
            </li>
            <li className="hover:text-[#55F229] transition">
              <NavLink to="/about">about</NavLink>
            </li>
            <li className="hover:text-[#55F229] transition">
              <NavLink to="/service">service</NavLink>
            </li>
            <li className="hover:text-[#55F229] transition">
              <NavLink to="/product">products</NavLink>
            </li>
            <li className="hover:text-[#55F229] transition">
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>
          <button className="text-4xl text-[#03318C] hover:text-[#55F229] transition-colors lg:hidden" onClick={() => setIsOpen(!open)}>
            <IoMdMenu />
          </button>
      </nav>
        <ul className={` lg:hidden bg-white text-[#03318C] font-medium text-lg capitalize px-5 space-y-2  transition-all duration-300 ease-in-out ${open ? "translate-y-0 max-h-64 opacity-100" : "translate-y-2 max-h-0 opacity-0"}`}>
          <li>
            <NavLink to="/" className="hover:text-[#55F229] transition">home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-[#55F229] transition">about</NavLink>
          </li>
          <li>
            <NavLink to="/service" className="hover:text-[#55F229] transition">service</NavLink>
          </li>
          <li>
            <NavLink to="/product" className="hover:text-[#55F229] transition">products</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-[#55F229] transition">contact</NavLink>
          </li>
        </ul>
    </>
  );
};

export default Navbar;
