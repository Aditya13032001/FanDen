import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/fav.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";

function Navbar() {
  const [nav, setnav] = useState(false);
  const handleClick = () => setnav(!nav);

  return (
    <div>
      <div className=" h-[21vh] w-screen flex flex-row justify-around items-center  ">
        {/* Bars */}
        <div className="md:hidden z-10 cursor-pointer  " onClick={handleClick}>
          {!nav ? (
            <FaBars className="h-8 w-8" />
          ) : (
            <FaTimes className="h-8 w-8" />
          )}
        </div>

        {/* Logo */}

        <div className="ml-4  flex flex-row items-center justify-center">
          <Link to="/">
            <img src={Logo} alt="Fanden" className="h-[20vh] rounded-md  " />
          </Link>
          <p className=" sm:hidden lg:block ml-3 w-[300px] text-lg text-slate-900">
            Experience sport like never before
          </p>
        </div>

        {/* Big Screen Navabr */}
        <div className="sm:hidden lg:block w-[60vh] ">
          <ul className="flex flex-row  justify-between items-center text-xl text-lime-800">
            <li className="hover:border-b-2  border-lime-800 cursor-pointer ">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:border-b-2 border-lime-800 cursor-pointer ">
              <Link to="/about">About</Link>
            </li>

            <li className="hover:border-b-2  border-lime-800 cursor-pointer flex flex-row  items-end ">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:border-b-2 border-lime-800 cursor-pointer  ">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:border-b-2 border-lime-800 cursor-pointer  ">
              <Link to="/merch">Upcoming </Link>
            </li>

            <Link to="/login">
              <button className="text-3xl flex items-center justify-center h-full w-full ml-6">
                <BiSolidUserCircle />
              </button>{" "}
            </Link>
          </ul>
        </div>

        {/* Cart */}

        {/* ----------------------------------------------------- */}
      </div>
      {/* Mobile Screen */}
      <ul
        className={!nav ? "hidden" : "flex flex-col relative ml-8 leading-10 "}
      >
        <li className="hover:text-lime-500 cursor-pointer  ">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-lime-500 cursor-pointer  ">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-lime-500 cursor-pointer  ">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="hover:text-lime-500 cursor-pointer  ">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-lime-500 cursor-pointer  ">
          <Link to="/merch">Upcoming </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
