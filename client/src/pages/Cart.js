import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) {
    <h1>Add Something to your Cart</h1>;
  }

  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState();
  const [card, setCard] = useState();
  const [cardDetails, setCardDetails] = useState();

  const [expiry, setExpiry] = useState();
  const [cvv, setCvv] = useState();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/cart", {
        fullname,
        email,
        card,
        cardDetails,
        expiry,
        cvv,
        cartTotal,
      })
      .then((result) => {
        console.log(result);
        navigate("/order");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="absolute ml-[20vh] lg:ml-[30vh] font-sans h-screen ">
      <section>
        <h1 className="flex justify-center text-6xl text-gray-700 uppercase font-serif">
          Checkout
        </h1>

        <div className="grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
          {items.map((item, index) => {
            return (
              <div className="bg-gray-50 py-10 md:py-24" key={index}>
                <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                  <div className="flex items-center gap-4">
                    <h2 className="font-medium text-gray-900">{item.title}</h2>
                  </div>

                  <div>
                    <p className="text-5xl font-medium tracking-tight text-gray-900 bg-slate-300 w-[20vh] h-16 rounded-md flex text-center items-center justify-center">
                      ₹ {cartTotal}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      For the purchase of
                    </p>
                  </div>

                  <div className="w-[80vh] h-[20vh]">
                    <div className="flow-root">
                      <ul className="-my-4 divide-y divide-gray-100">
                        <li className="flex items-center gap-4 py-4">
                          <div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-3xl flex justify-center w-full"
                            >
                              <RxCrossCircled />
                            </button>
                          </div>
                          <img
                            src={item.img}
                            alt=""
                            className="h-[30vh] lg:h-[40vh] w-[40vh] rounded object-cover"
                          />

                          <div>
                            <h3 className="text-2xl text-gray-900">
                              ₹{item.price}
                            </h3>

                            <dl className="mt-2 space-y-px text-gray-600">
                              <div className="text-xl">
                                <dt className="inline ">
                                  Quantity:{" "}
                                  <span className="font-bold">
                                    {item.quantity}
                                  </span>
                                </dt>
                              </div>
                              <div className="w-full h-full flex  justify-evenly text-2xl font-bold">
                                <button
                                  className="hover:text-black "
                                  onClick={() =>
                                    updateItemQuantity(
                                      item.id,
                                      item.quantity - 1
                                    )
                                  }
                                >
                                  -
                                </button>
                                <button
                                  className="hover:text-black  "
                                  onClick={() =>
                                    updateItemQuantity(
                                      item.id,
                                      item.quantity + 1
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </dl>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="bg-white py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form className="grid grid-cols-6 gap-4" onSubmit={handlesubmit}>
                <div className="">
                  <label className="mt-4 mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      className="w-[400px] rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder=" Full Name"
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                    />
                  </div>
                  <label className="mt-4 mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      id="email"
                      name="email"
                      className="w-[400px] rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="your.email@gmail.com"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                  </div>
                  <label className="mt-4 mb-2 block text-sm font-medium">
                    Card Holder
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setCard(e.target.value);
                      }}
                      type="text"
                      id="card-holder"
                      name="card-holder"
                      className="w-[400px] rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your full name here"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <label className="mt-4 mb-2 block text-sm font-medium">
                    Card Details
                  </label>
                  <div className="flex">
                    <div className="relative w-7/12 flex-shrink-0">
                      <input
                        onChange={(e) => {
                          setCardDetails(e.target.value);
                        }}
                        type="text"
                        id="card-no"
                        name="card-no"
                        className="w-[300px] rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <input
                    onChange={(e) => {
                      setExpiry(e.target.value);
                    }}
                    type="date"
                    name="credit-expiry"
                    className="w-[80px]rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="MM/YY"
                  />
                  <input
                    onChange={(e) => {
                      setCvv(e.target.value);
                    }}
                    type="integer"
                    name="credit-cvc"
                    className="w-[80px] flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="CVC"
                    maxLength="3"
                    step="1"
                  />
                </div>

                <div className="col-span-6">
                  <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
