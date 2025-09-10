import "./Products.css";

import image1 from "../../assets/product/p-1.jpg";
import image2 from "../../assets/product/p-2.jpg";
import image3 from "../../assets/product/p-3.jpg";
import image4 from "../../assets/product/p-4.jpg";
import image5 from "../../assets/product/p-5.jpg";
import image6 from "../../assets/product/p-7.jpg";
import image7 from "../../assets/product/p-1.jpg";
import image8 from "../../assets/product/p-9.jpg";
import { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Boat Rockerz 450",
    price: "$120",
    img: image1,
    aosDelay: 0,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$150",
    img: image2,
    aosDelay: 200,
  },
  {
    id: 3,
    name: "JBL Tune 760NC",
    price: "$180",
    img: image3,
    aosDelay: 400,
  },
  {
    id: 4,
    name: "Skullcandy Crusher Evo",
    price: "$200",
    img: image4,
    aosDelay: 600,
  },
  {
    id: 5,
    name: "Sennheiser HD 450BT",
    price: "$170",
    img: image5,
    aosDelay: 800,
  },
  {
    id: 6,
    name: "Beats Studio3 Wireless",
    price: "$300",
    img: image6,
    aosDelay: 1000,
  },
  {
    id: 7,
    name: "AKG K371",
    price: "$150",
    img: image7,
    aosDelay: 1200,
  },
  {
    id: 8,
    name: "Anker Soundcore Life Q35",
    price: "$130",
    img: image8,
    aosDelay: 1400,
  },
];

export default function Products({ handleProductsInCart }) {
  const [showProductHover, setShowProductHover] = useState(null);
  const [showButton, setShowButton] = useState(null);

  function handleHoverProduct(productId) {
    setShowProductHover(productId);

    setTimeout(() => {
      setShowButton(productId);
    }, 200);
  }

  function handleLeaveProduct(productId) {
    setShowProductHover(null);

    setTimeout(() => {
      setShowButton(null);
    }, 200);
  }

  return (
    <div className="products-container" id="products">
      <div>
        <h1 className="products-title">Our Products</h1>
        <p className="products-description">Explore Our Products</p>
      </div>
      <div className="boxes">
        {productsData.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            key={item.id}
            className="box"
          >
            <div
              className="product-img"
              onMouseEnter={() => {
                handleHoverProduct(item.id);
              }}
              onMouseLeave={() => {
                handleLeaveProduct();
              }}
            >
              <img
                className={
                  showProductHover === item.id ? "product-hover" : null
                }
                src={item.img}
                alt={item.name}
              />
              {showButton === item.id ? (
                <button className="product-btn" onClick={handleProductsInCart}>
                  Add to cart
                </button>
              ) : null}
            </div>
            <div className="product-details">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
