import React from "react";
import Team from "../assets/team.png";

import { BiSolidQuoteLeft } from "react-icons/bi";

function FeedBack() {
  return (
    <div className="h-[50vh] w-full mt-[8vh] grid grid-cols-3 gap-0 mb-32 ">
      {/* Crad1 */}
      <div className=" text-center m-4 p-4 border-2 border-black hover:scale-110 transition-all duration-300">
        <BiSolidQuoteLeft className="text-4xl bg-slate-300 rounded-full  p-2" />
        <div>
          <p>
            Hala Madrid!!! Had the best experience watching Madrid whoop
            Barcelona.
          </p>
        </div>
        <div className="flex flex-row items-center  justify-center w-full mt-10 p-3 rounded-lg">
          <img
            src={Team}
            alt="team pic "
            className="h-10 rounded-full w-10 object-cover"
          />
          <h1 className="ml-3">KARAN KUMARAN</h1>
        </div>
      </div>
      {/* Crad2 */}

      <div className=" text-center  m-4 p-4 border-2 border-black hover:scale-110 transition-all duration-300">
        <BiSolidQuoteLeft className="text-4xl bg-slate-300 rounded-full p-2" />
        <div>
          <p>
            Zabardast maza aaya in the World Cup match against Pakistan. Keep
            continuing, hopefully I get to see India winning the World Cup at
            the Den.
            <br />
            Atleast for us Indians 😉
          </p>
        </div>
        <div className="flex flex-row items-center  justify-center w-full mt-10 p-3 rounded-lg">
          <img
            src={Team}
            alt="team pic "
            className="h-10 rounded-full w-10 object-cover"
          />
          <h1 className="ml-3">NAMAN SHAH</h1>
        </div>
      </div>
      {/* Crad3 */}

      <div className=" text-center  m-4 p-4 border-2 border-black hover:scale-110 transition-all duration-300">
        <BiSolidQuoteLeft className="text-4xl bg-slate-300 rounded-full  p-2" />
        <div>
          <p>
            Fan Den's Red Den in Tribe is the ultimate venue for a United fan.
            The red theme and chants make it nothing short of Old Trafford.
          </p>
        </div>
        <div className="flex flex-row items-center  justify-center w-full mt-10 p-3 rounded-lg">
          <img
            src={Team}
            alt="team pic "
            className="h-10 rounded-full w-10 object-cover"
          />
          <h1 className="ml-3">ANURAG CHEBIUM</h1>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
