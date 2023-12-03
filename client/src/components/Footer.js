import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  const [show, setShow] = useState(false);
  const subscribe = () => {
    setShow(!show);
  };

  return (
    <div className="absolute bg-[#090b04] h-[70vh] w-full text-white">
      <div className="w-full text-center mt-11 ">
        <ul className="flex flex-row justify-center items-center">
          <li className="hover:text-lime-500 cursor-pointer ml-2 mr-2  ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-lime-500 cursor-pointer ml-2 mr-2 ">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-lime-500 cursor-pointer ml-2 mr-2 ">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-lime-500 cursor-pointer ml-2 mr-2 ">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <form
        className={
          show
            ? "hidden"
            : "flex flex-row w-full text-center mt-20 justify-center "
        }
        method="POST"
        action="https://getform.io/f/bd07a482-ff03-423d-b6ea-f2c54721acb8"
      >
        <input
          className="w-[60vh] text-black pl-6"
          type="email"
          placeholder=" Your email address...."
          name="email"
        />
        <button
          className=" text-xl p-3 ml-3  w-40 bg-lime-800 hover:bg-gray-700 hover:text-white rounded-sm"
          onClick={subscribe}
        >
          Subscribe
        </button>
      </form>

      <div
        className={
          show
            ? " w-full text-center mt-20 justify-center text-white text-3xl"
            : "hidden"
        }
      >
        <p>Thank You Gor Subscribing our NewsLetter</p>
      </div>

      <div className="flex flex-row w-full text-center mt-20 justify-center ">
        <a
          href="https://www.instagram.com/fanden_india/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="ml-2 mr-2 cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2Ffanden"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter className="ml-2 mr-2 cursor-pointer" />
        </a>

        <a
          href="https://www.facebook.com/fanden.india/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className="ml-2 mr-2 cursor-pointer" />
        </a>
      </div>
      <p className="w-full text-center mt-20 justify-center ">
        © 2023 Fan Den India. Powered by Fan Den India.
      </p>
    </div>
  );
}

export default Footer;
