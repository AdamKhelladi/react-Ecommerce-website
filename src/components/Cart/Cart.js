import { IoIosCloseCircle } from "react-icons/io";

import "./Cart.css";
import { useEffect, useState } from "react";

export default function Cart({ cartItems, deleteProduct }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + parseInt(item.price.replace("$", "")),
      0
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
          <form
            className="form"
            action="https://formspree.io/f/mvgbljwb"
            method="POST"
          >
            <input
              type="text"
              name="customer_name"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="customer_email"
              placeholder="Enter your email"
              required
            />
            <input
              type="tel"
              name="customer_phone"
              placeholder="Enter your phone number"
              required
            />
            <input
              type="text"
              name="customer_address"
              placeholder="Enter your address"
            />
            <textarea
              name="customer_message"
              placeholder="Enter your message"
            ></textarea>

            {cartItems.map((item, index) => (
              <div key={index}>
                <input
                  type="hidden"
                  name={`product_${index + 1}_name`}
                  value={item.name}
                />
                <input
                  type="hidden"
                  name={`product_${index + 1}_price`}
                  value={item.price}
                />
              </div>
            ))}

            <input type="hidden" name="total_price" value={`${totalPrice}$`} />

            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
