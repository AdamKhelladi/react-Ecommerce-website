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
import { useEffect, useState } from "react";

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

  function handleClickOrder() {
    setOrderPopup(!orderPopup);
  }

  const [orders, setOrders] = useState(
    Number(localStorage.getItem("orders")) || 0
  );

  useEffect(() => {
    localStorage.setItem("orders", orders);
  }, [orders]);

  function handleProductsInCart() {
    setOrders(orders + 1);
  }

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
    <div className="App">
      <div className="project-container">
        <NavBar handleClickOrder={handleClickOrder} orders={orders} />
        <Hero handleClickOrder={handleClickOrder} />
        <Category />
        <Services />
        <Banner bannerData={bannerOneData} />
        <Products handleProductsInCart={handleProductsInCart} />
        <Banner bannerData={bannerTwoData} />
        <Blogs />
        <Partners />
        <Footer />
        <Popup orderPopup={orderPopup} handleClickOrder={handleClickOrder} />
      </div>
    </div>
  );
}

export default App;
