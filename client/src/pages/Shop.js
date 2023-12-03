import React, { Suspense } from "react";
import { ReactComponent as Loading } from "../assets/loading.svg";
import City from "../components/City";
import Footer from "../components/Footer";
function Shop() {
  return (
    <div className=" font-serif">
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <City />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Shop;
