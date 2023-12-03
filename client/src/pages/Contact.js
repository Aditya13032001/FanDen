import React, { useState } from "react";
import Footer from "../components/Footer";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [callus, setCallus] = useState(false);
  const navigate = useNavigate();

  const callNow = () => {
    setCallus(!callus);
  };

  // Blunder code....Please Ignore!!!!!!! Build on 29-Nov-23(Recheck)
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post("http://localhost:3001/contact", formData);
  //     console.log("Contact form submitted successfully!");
  //     // You can redirect or show a success message here
  //   } catch (error) {
  //     console.error(
  //       "Error submitting contact form:",
  //       error.response.data.error
  //     );
  //   }
  // };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/contact", { name, email, message })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/contact");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Grid */}

        <div className="h-screen w-full  p-5 text-left border-r-2">
          <h1 className="text-4xl  uppercase text-slate-700 mt-11 flex ml-28 ">
            GET IN TOUCh
          </h1>
          <div className="text-md mt-11 ml-28 ">
            <span>
              We’re here to help and answer any question you might have while
              <br />
              making your wait time minimal. We look forward to hearing from
              you.
            </span>
          </div>

          <div className="grid grid-cols-2 mt-11 w-[30vh]">
            <div className="text-3xl flex justify-end">
              <BiSolidPhoneCall />
            </div>
            <div className="flex flex-col leading-10 ml-4">
              <span className="uppercase">Call US</span>
              <span className="font-bold">9324811124</span>
            </div>
          </div>
          <div className="grid grid-cols-2 w-[30vh]">
            <div className="text-3xl flex justify-end">
              <AiTwotoneMail />
            </div>
            <div className="flex flex-col leading-10 ml-4">
              <span className="uppercase">EMAIL US</span>
              <span className="font-bold">fandenindia@gmail.com</span>
            </div>
          </div>
          <br />
          <hr className=" bg-black"></hr>
          <br />
          <br />
          <br />
          <br />

          <h1 className="text-4xl lg:text-xl  uppercase text-slate-700 flex justify-center">
            Follow US
          </h1>
          <div className="flex flex-row mt-4 justify-center text-4xl">
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
        </div>
        {/* Right Grid */}
        <div className="h-screen w-full leading-10">
          <h1 className="text-3xl  uppercase text-slate-700 lg:mt-14 flex lh ml-28 mt-[22vh]">
            DROP US A LINE OR TWO
          </h1>
          <div>
            <h1
              className={
                callus
                  ? "text-3xl  uppercase text-slate-700 lg:mt-14 flex lh ml-28 mt-[22vh]"
                  : "hidden"
              }
            >
              We Will call back you Shortly
            </h1>
          </div>
          <div className={!callus ? "ml-28" : "hidden"}>
            {/* Form */}
            <form className="form" onSubmit={handlesubmit}>
              <div>
                <label className="">
                  Name <span className="text-red-900   font-bold">*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="border-2 border-gray-200  w-[80vh]  bg-gray-50 focus:bg-white pl-3 "
                  placeholder="Name"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="">
                  Email <span className="text-red-900 font-bold">*</span>
                </label>
                <br />
                <input
                  type="email"
                  className="border-2 border-gray-200 w-[80vh] bg-gray-50 focus:bg-white   pl-3"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="">
                  Message <span className="text-red-900 font-bold">*</span>
                </label>
                <br />
                <textarea
                  className="border-2 border-gray-200 w-[80vh] bg-gray-50 focus:bg-white  pl-3"
                  name="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                className=" bg-lime-700 h-[8vh] w-[20vh] hover:bg-gray-800 text-white"
                onClick={callNow}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
