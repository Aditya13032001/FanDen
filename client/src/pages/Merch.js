import React from "react";
import Footer from "../components/Footer";
import worldcup from "../assets/worldcup.webp";
import pl from "../assets/pl.avif";
import t20 from "../assets/tdo.jpeg";
import ind from "../assets/indvsWest.jpg";

function Merch() {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 ">
        <div className="  mt-8 ml-[30vh] lg:ml-[40vh] mb-11 w-[47vh] text-gray-800     ">
          <div>
            <img src={worldcup} alt="" className=" rounded-md" />
          </div>
          <h1 className="flex justify-center fon-serif uppercase font-bold text-2xl">
            ICC MENS WORLD CUP
          </h1>
          <span className="font-bold flex justify-center ">Coming Soon</span>
        </div>
        <div className="  mt-8 ml-[30vh] lg:ml-[20vh] mb-11 w-[47vh]        ">
          <div>
            <img src={pl} alt="" className=" rounded-md" />
          </div>
          <h1 className="flex justify-center fon-serif uppercase font-bold text-2xl">
            PREMIERE LEAGUE
          </h1>
          <span className="font-bold flex justify-center ">
            Booking Starts 1-Aug
          </span>
        </div>
        <div className="  mt-8 ml-[30vh] lg:ml-[40vh] mb-11 w-[47vh]        ">
          <div>
            <img src={t20} alt="" className="rounded-md" />
          </div>
          <h1 className="flex justify-center fon-serif uppercase font-bold text-2xl">
            T20 worldcup
          </h1>
          <span className="font-bold flex justify-center ">Coming Soon</span>
        </div>
        <div className="  mt-8 ml-[30vh] lg:ml-[20vh] mb-11 w-[47vh]        ">
          <div>
            <img src={ind} alt="" className=" rounded-md" />
          </div>
          <h1 className="flex justify-center fon-serif uppercase font-bold text-2xl">
            IND VS WESTINDIES
          </h1>
          <span className="font-bold flex justify-center ">Coming Soon</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Merch;
