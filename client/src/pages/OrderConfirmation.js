import React from "react";
import "../OrderConfirmation.css";

function OrderConfirmation() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container text-center">
          <h1>Thank you.</h1>
          <p className="lead w-lg-50 mx-auto">
            Your order has been placed successfully.
          </p>
          <p className="w-lg-50 mx-auto">
            Your order number is <a href="#/">9237427634826</a>. We will send
            you and email with all Details.
          </p>
        </div>
      </div>
    </div>
  );
}
export default OrderConfirmation;
