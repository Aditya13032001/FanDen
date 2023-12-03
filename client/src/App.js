import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ReactComponent as Loading } from "./assets/loading.svg";
import data from "./data";
import { CartProvider } from "react-use-cart";
const Contact = lazy(() => import("./pages/Contact"));
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./pages/About"));
const Shop = lazy(() => import("./pages/Shop"));
const Merch = lazy(() => import("./pages/Merch"));
const ItemCard = lazy(() => import("./pages/ItemCard"));
const Cart = lazy(() => import("./pages/Cart"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Redirect = lazy(() => import("./pages/Redirect"));
const Orderconfirm = lazy(() => import("./pages/OrderConfirmation"));

function App() {
  return (
    <div className=" overflow-hidden">
      <CartProvider>
        <Router>
          <Navbar />
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/order" exact element={<Orderconfirm />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/shop" exact element={<Shop />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/redirect" exact element={<Redirect />} />

              <Route
                path="/ItemCard"
                exact
                element={
                  <div>
                    {" "}
                    {data.productData.map((item, index) => {
                      return (
                        <ItemCard
                          img={item.img}
                          title={item.title}
                          desc={item.desc}
                          originalPrice={item.originalPrice}
                          price={item.price}
                          item={item}
                          key={index}
                        />
                      );
                    })}
                  </div>
                }
              />
              <Route path="/merch" exact element={<Merch />} />
              <Route path="/cart" exact element={<Cart />} />
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
