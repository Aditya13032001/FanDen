import React from "react";
import "./Carousel.css";
import pic1 from "../assets/1.png";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png";
import pic4 from "../assets/4.png";
import pic5 from "../assets/5.png";
import pic6 from "../assets/6.png";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div className=" h-[80vh] w-screen ">
      <div>
        <h1 className="header">FANDEN</h1>
        <h3 className=" header2 ">
          Join the <span className="span hover:text-black">Revolution</span>
        </h3>
        <p className="  w-full text-center">
          Embracing the Passion for Sports across India
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-11 lg:ml-[40vh]">
        <div className="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
          <div className="group relative h-96 w-[30rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={pic1}
              alt=""
            />
            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <div>
                    <p className="font-sembold text-xl text-gray-100">
                      Manchester Derby at Social Tribe
                    </p>
                    <Link to="/shop">
                      <button className="bg-white text-black h-7 w-24 hover:bg-black hover:text-white">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={pic2}
              alt=""
            />
            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <div>
                    <p className="font-sembold text-xl text-gray-100">
                      El Clasico at Escobar
                    </p>
                    <Link to="/shop">
                      <button className="bg-white text-black h-7 w-24 hover:bg-black hover:text-white">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={pic3}
              alt=""
            />
            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <div>
                    <p className="font-sembold text-xl text-gray-100">
                      Ind vs Pak at Social
                    </p>
                    <Link to="/shop">
                      <button className="bg-white text-black h-7 w-24 hover:bg-black hover:text-white">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={pic4}
              alt=""
            />
            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <div>
                    <p className="font-sembold text-xl text-gray-100">
                      Monza at Dirty Martini
                    </p>
                    <Link to="/shop">
                      <button className="bg-white text-black h-7 w-24 hover:bg-black hover:text-white">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={pic5}
              alt=""
            />
            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <div>
                    <p className="font-sembold text-xl text-gray-100">
                      Arsenal vs Chelsea at Mac Brewhouse
                    </p>
                    <Link to="/shop">
                      <button className="bg-white text-black h-7 w-24 hover:bg-black hover:text-white">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={pic6}
              alt=""
            />
            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <div>
                    <p className="font-sembold text-xl text-gray-100">
                      Manchester Derby at Social Tribe
                    </p>
                    <Link to="/shop">
                      <button className="bg-white text-black h-7 w-24 hover:bg-black hover:text-white">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={pic6}
              alt=""
            />
            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <div>
                    <p className="font-sembold text-xl text-gray-100">
                      Der Klassiker at Frog the Leap
                    </p>
                    <Link to="/shop">
                      <button className="bg-white text-black h-7 w-24 hover:bg-black hover:text-white">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
