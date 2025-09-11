import { IoIosCloseCircle } from "react-icons/io";

import "./Cart.css";
import { useEffect, useState } from "react";

export default function Cart({ cartItems, deleteProduct }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const isFormValid =
    cartItems.length > 0 &&
    formData.name.trim() &&
    formData.email.trim() &&
    formData.address.trim() &&
    formData.phone.trim();

  function handleSubmitBtn() {
    localStorage.removeItem("cartItemsObject");
    // window.location.reload();
  }

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
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              onChange={handleChange}
            />

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

            <button
              type="submit"
              className="form-btn"
              disabled={!isFormValid}
              onClick={handleSubmitBtn}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
