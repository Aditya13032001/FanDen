import React from "react";
import Pune from "../assets/pune.jpg";
import Mumbai from "../assets/mumbai.jpg";
import Chand from "../assets/chan.png";
import Bang from "../assets/bang.jpg";
import Product from "./Product";
import data from "../data";
import { Link } from "react-router-dom";

function CIty() {
  return (
    <div className=" font-serif h-full  ">
      <h1 className="text-2xl mt-10 mb-10 ml-11">Choose Your City</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-1  h-[270vh] w-[50vh] m-auto lg:w-[200vh] lg:h-[65vh] cursor-pointer">
        <Link to="/shop">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 text-2xl">
            <div className="h-full w-full">
              <img
                className="h-[65vh] w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={Pune}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <h1 className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              Pune
            </h1>
          </div>
        </Link>

        {/*  */}
        <Link to="/shop">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 text-2xl">
            <div className="h-full w-full">
              <img
                className="h-[65vh] w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={Mumbai}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <h1 className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              Mumbai
            </h1>
          </div>
        </Link>

        {/*  */}
        <Link to="/shop">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 text-2xl">
            <div className="h-full w-full">
              <img
                className="h-[65vh] w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={Bang}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <h1 className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              Banglore
            </h1>
          </div>
        </Link>

        {/*  */}
        <Link to="/shop">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 text-2xl">
            <div className="h-full w-full">
              <img
                className="h-[65vh] w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={Chand}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <h1 className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              Chandigarh
            </h1>
          </div>
        </Link>
      </div>
      <h1 className="flex justify-center text-3xl font-serif mt-11 ">
        FEATURED EVENTS
      </h1>
      <div>
        {data.productData.map((item, index) => {
          return (
            <Product
              img={item.img}
              title={item.title}
              desc={item.desc}
              originalPrice={item.originalPrice}
              price={item.price}
              item={item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CIty;
