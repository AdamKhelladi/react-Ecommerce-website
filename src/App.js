import "./App.css";
import Category from "./components/ Category/Category";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";

import image1 from "../src/assets/hero/headphone.png";
import image2 from "../src/assets/category/smartwatch2-removebg-preview.png";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Cart from "./components/Cart/Cart";

import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const bannerOneData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  img: image1,
  rightTitle: "Winter Sale",
  rightSubtitle: "Air Solo Bass",
  description: "High-quality sound, deep bass, and all-day comfort.",
  buttonText: "Shop Now",
  itemColor: "red",
};

const bannerTwoData = {
  discount: "20% OFF",
  title: "Happy Hours",
  date: "01 Feb to 15 Feb",
  img: image2,
  rightTitle: "watch Deal",
  rightSubtitle: "Time in Style",
  description:
    "Stay connected and stylish with our latest smartwatch collection.",
  buttonText: "Discover Now",
  itemColor: "green",
};

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const [orders, setOrders] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function handleClickOrder() {
    setOrderPopup(!orderPopup);
  }

  let cart = JSON.parse(localStorage.getItem("cartItemsObject")) || [];

  function addToCart(product) {
    if (!cart.some((item) => item.id === product.id)) {
      cart.push(product);
      localStorage.setItem("cartItemsObject", JSON.stringify(cart));

      setCartItems(cart);
    }
  }

  function deleteProduct(product) {
    let cart = JSON.parse(localStorage.getItem("cartItemsObject")) || [];
    cart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cartItemsObject", JSON.stringify(cart));

    setCartItems(cart);
  }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItemsObject") || []) 
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    setOrders(cartItems.length);
  }, [cartItems]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="project-container">
          <NavBar handleClickOrder={handleClickOrder} orders={orders} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Hero handleClickOrder={handleClickOrder} />
                  <Category />
                  <Services />
                  <Banner bannerData={bannerOneData} />
                  <Products addToCart={addToCart} />
                  <Banner bannerData={bannerTwoData} />
                  <Blogs />
                  <Partners />
                  <Footer />
                  <Popup
                    orderPopup={orderPopup}
                    handleClickOrder={handleClickOrder}
                  />
                </>
              }
            ></Route>

            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} deleteProduct={deleteProduct} />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
