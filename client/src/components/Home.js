import React from "react";
import fanwatch from "../assets/fanwatch.jpg";
import "./Home.css";
import Carousel from "./Carousel";
import City from "../components/City";
import FeedBack from "../components/FeedBack";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="absolute mt-4 ">
      <div>
        <img
          src={fanwatch}
          alt="fanwatch"
          className="object-cover w-screen h-[70vh] opacity-70"
        />
        <h1 className="text hidden lg:block uppercase">
          Experience the Non-Stadia, <br />
          <span style={{}}>Stadium Atmosphere!</span>
        </h1>
        <Link to="/shop">
          <button className=" absolute text-4xl text-white mt-[-30vh] lg:ml-[90vh] bg-black text-center h-[10vh] w-[40vh] border-white border-2 rounded-md ml-[40vh]">
            Reserve Now!
          </button>
        </Link>
      </div>
      <Carousel />
      <City />
      <div className="w-screen h-[60vh] mb-11 flex flex-col justify-center font-serif ">
        <img
          src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt=""
          className="object-cover w-full h-full opacity-75"
        />
        <span className="absolute text-black text-center lg:ml-[55vh]  ">
          <h4 className="text-5xl mb-5">SEASON PASS </h4>
          <h1 className="text-8xl mt-5 mb-5 ">Ultimate Fan Pass</h1>
          <h4 className="text-2xl mt-5 mb-5">
            10% discount on every ticket, priority check-in and reservations
          </h4>
          <Link to="/shop">
            <button className=" bg-black h-[8vh] w-[40vh] text-xl text-white hover:bg-white hover:text-black transition-all duration-300">
              Purchase Pass
            </button>
          </Link>
        </span>
      </div>
      <h1 className="flex justify-center text-3xl font-serif mt-11 ">
        FANS AT DEN
      </h1>
      <FeedBack />
      <Footer />
    </div>
  );
}

export default Home;
