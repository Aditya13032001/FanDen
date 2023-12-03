import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className=" mt-8 ml-[30vh] lg:ml-[85vh] mb-11 w-[47vh] border-2 border-black hover:border-lime-500">
      <Link to="/ItemCard">
        <div>
          <img src={props.img} alt="" className="m-4" />
        </div>
        <h1 className="ml-11">
          {props.title} <br />
          {props.desc}
        </h1>
        <span className="font-bold ml-11">
          <strike className="text-slate-700">
            &#x20B9;{props.originalPrice}
            {"    "}
          </strike>
          &#x20B9;{props.price}
        </span>
      </Link>
    </div>
  );
};

export default Product;
