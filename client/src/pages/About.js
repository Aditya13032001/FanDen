import React from "react";
import Video from "../assets/vid1.mp4";
import { FaQuoteLeft } from "react-icons/fa";
import Team from "../assets/team.png";
import pic1 from "../assets/1.png";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png";
import pic4 from "../assets/4.png";
import pic5 from "../assets/5.png";
import pic6 from "../assets/6.png";
import FeedBack from "../components/FeedBack";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <div className=" w-[90%] h-full ml-10  p-8 lg:ml-16 font-serif text-center">
        <h1 className="text-7xl  uppercase text-slate-700 ">About US</h1>
        <br />
        <hr className=" bg-slate-700 h-1"></hr>
        <div>
          <span className="">
            <span className=" text-4xl ">
              Embracing passion, friendship and entertainment
              <br /> through spectator sports <br />
            </span>
            <br />
            <span className="text-2xl ">
              The vast discrepancy between the passion of Indian sports fans and
              accessibility to experience sports optimally laid the foundation
              of Fan Den.
              <br />
              <br />
            </span>
            <span className="text-2xl ">
              Providing a platform for upcoming youth talent to reach a larger
              audience, accompanied by helping fans in having the ultimate match
              day experience in line with their passion for sports is the
              objective of Fan Den.
            </span>
          </span>
        </div>
        <video class=" h-[150vh]  mt-4 ml-3 lg:ml-96" muted autoPlay loop>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Story */}
        <div className="mt-32 mb-32 grid lg:grid-cols-2 sm:grid-cols-1">
          <div>
            <h1 className="text-xl  uppercase mt-3 ">
              <u>Our Story</u>
            </h1>
            <br />
          </div>
          <div className="p-5 text-xl bg-slate-100 text-slate-800 text-left">
            <p>
              FanDen originated out of passion and friendship.
              <br />
              <br /> Life-long friends that developed their passion for sports
              together joint hands together to bring the sport community
              together and create a sense of togetherness to aide Indian sport
              to grow to its true potential.
            </p>
            <br />
            <div className="flex flex-row text-center">
              <FaQuoteLeft />
              <h1 className="font-semibold text-sm ml-3 mr-3">
                Passion and solely passion can elevate the soul to great things.
              </h1>
              <FaQuoteLeft />
            </div>
            <div className="flex flex-row items-center  justify-center w-44 mt-10 p-3 bg-neutral-200 rounded-lg">
              <img
                src={Team}
                alt="team pic "
                className="h-10 rounded-full w-10 object-cover"
              />
              <h1 className="ml-3">FANDEN</h1>
            </div>
          </div>
        </div>
        {/* Story */}

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-1 h-[80vh] ">
          {/* grid 1 */}
          <div className="h-[80vh] w-[90vh] lg:w-[110vh]">
            <img
              src={pic1}
              alt="team pic "
              className="object-fill h-full  rounded-lg"
            />
          </div>
          {/* grid 2 */}
          <div className="grid grid-rows-2 gap-1 h-[80vh] ml-28 lg:visible sm:invisible">
            <div>
              <img
                src={pic2}
                alt="team pic "
                className="object-cover h-full w-screen rounded-md"
              />
            </div>
            <div>
              <img
                src={pic3}
                alt="team pic "
                className="object-cover w-screen  h-full  rounded-md"
              />
            </div>
          </div>
        </div>

        {/* image grid 2 */}
        <div className="grid grid-cols-3 gap-1 h-[50vh] w-full mt-2">
          <div>
            <img
              src={pic4}
              alt="team pic "
              className="object-cover w-screen  h-full  rounded-md"
            />
          </div>
          <div>
            <img
              src={pic5}
              alt="team pic "
              className="object-cover w-screen  h-full  rounded-md"
            />
          </div>
          <div>
            <img
              src={pic6}
              alt="team pic "
              className="object-cover w-screen  h-full  rounded-md"
            />
          </div>
        </div>
        <FeedBack />
      </div>
      <Footer />
    </div>
  );
}

export default About;
