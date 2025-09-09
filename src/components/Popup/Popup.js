import "./Popup.css";
import { IoIosCloseCircle } from "react-icons/io";

export default function Popup({ orderPopup, handleClickOrder }) {
  return (
    <div>
      {orderPopup ? (
        <div className="popup">
          <div className="popup-container">
            <div className="popup-header">
              <h3>Order Now</h3>
              <IoIosCloseCircle className="popup-close-icon" onClick={handleClickOrder}/>
            </div>
            <div className="popup-body">
              <input type="text" placeholder="Enter you name" />
              <input type="email" placeholder="Enter you email" />
              <input type="text" placeholder="Enter you address" />
            </div>
            <button className="popup-btn">Order Now</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
