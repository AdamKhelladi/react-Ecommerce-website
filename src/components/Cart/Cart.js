import { IoIosCloseCircle } from "react-icons/io";

import "./Cart.css";
import { useEffect, useState } from "react";

export default function Cart({ cartItems, deleteProduct }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + parseInt(item.price.replace("$", "")), 0
    );

    setTotalPrice(total);
  }, [cartItems]);

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="product">
                <div className="product-img">
                  <img
                    className="product-hover"
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                <div className="product-details">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
                <IoIosCloseCircle
                  className="close-icon"
                  onClick={() => {
                    deleteProduct(item);
                  }}
                />
              </div>
            ))}
          </>
        ) : (
          <p style={{ textAlign: "center" }}>Cart is empty !</p>
        )}
      </div>
      <div className="cart-right">
        <div className="total-price">
          <h1>
            Total Price: <span>{`${totalPrice}$`}</span>
          </h1>
        </div>

        <div className="client-infos">
          <h1>Order Now</h1>
          <div className="form">
            <input type="text" placeholder="Enter you name" />
            <input type="email" placeholder="Enter you email" />
            <input type="text" placeholder="Enter you address" />
            <textarea placeholder="Enter your message"></textarea>
          </div>
          <button className="form-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}
