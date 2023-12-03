import React from "react";
import { useLocation } from "react-router-dom";
const Redirect = () => {
  const location = useLocation();
  return (
    <div>
      <div>{location.state.id}</div>
    </div>
  );
};

export default Redirect;
