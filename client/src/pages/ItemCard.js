import { Link } from "react-router-dom";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png";
import pic4 from "../assets/4.png";
import pic5 from "../assets/4.png";
import Footer from "../components/Footer";
import { useCart } from "react-use-cart";

function ItemCard(props) {
  const { addItem } = useCart();

  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 h-screen w-screen mt-10 ">
        <div className="flex justify-center lg:block">
          <img
            src={props.img}
            alt=""
            className="w-[60vh] h-[70vh] ml-[40vh] "
          />
          <div className="grid grid-cols-4 gap-2 ml-[40vh] h-40 w-[60vh] mt-5">
            <div>
              <img
                src={pic2}
                alt=""
                name="pic3"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={pic3}
                alt=""
                name="pic3"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={pic4}
                alt=""
                name="pic3"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src={pic5}
                alt=""
                name="pic3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" w-screen  ">
          <div className="flex flex-col items-start justify-start ">
            <h1 className="mt-11 mb-5 text-3xl font-serif">{props.title}</h1>
            <h3 className=" mb-5 text-xl font-serif">{props.desc}</h3>
            <p className=" mb-5 text-xl">
              <strike>₹{props.originalPrice} </strike>₹{props.price}
            </p>
            <p className=" mb-5 text-lg text-gray-700 ">Welcome to Fanden!</p>
            <p className="mb-5 text-lg text-gray-700">
              Join the revolution in enhancing experience of sports enthusiasts
              at the Den
            </p>
            <div className="mb-5 flex flex-row justify-evenly items-center">
              <Link to="/cart">
                <button
                  className=" ml-4 h-10  w-36 text-xl bg-lime-700 text-white font-semibold"
                  onClick={() => addItem(props.item)}
                >
                  Add to Cart
                </button>
              </Link>
            </div>

            <p className="text-lg text-gray-700">
              Categories: Bangalore, Chandigarh, Delhi, Live Screenings, Mumbai,
              Pune
              <br /> Tags: fifs, football, live screening, main event, soccer,
              world cup
            </p>
          </div>
        </div>
      </div>
      <div className=" invisible lg:visible  w-[150vh] h-[50vh] mt-11 ml-[40vh] text-gray-700 ">
        <hr className="bg-gray-700 h-1"></hr>
        <h1 className="text-2xl font-semibold mt-4">Description</h1>
        <h1 className="mt-2 text-xl mb-2">
          The ‘The Ultimate Fan’ pass includes:
        </h1>
        <div className="ml-[5vh]">
          <ul type="square">
            <li>10% discount on –</li>
            <ol className="ml-[10vh]">
              <li>1-Live Screenings (Max. 4 persons per screening)</li>
              <li>
                2-Team registration for tournaments (Max. 2 teams per
                tournament)
              </li>
            </ol>
            <li>Priority Reservations in –</li>
            <ol className="ml-[10vh]">
              <li>1-Live Screenings (Max. 4 persons per screening)</li>
              <li>
                2-Registration in tournaments (Max. 2 teams per tournament)
              </li>
            </ol>
          </ul>
        </div>
        <h1 className="mt-4 font-semibold text-xl">
          {" "}
          Valid for 3 months across India at all of our Dens.
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default ItemCard;
