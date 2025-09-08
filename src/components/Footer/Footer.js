import "./Footer.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";

export default function Footer() {
  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blog",
      link: "/#blog",
    },
  ];

  return (
    <div className="footer-container">
      <div>
        <div className="logo-name">
          <a href="#">ESHOP</a>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          alias cum
        </p>
        <div className="love-msg">Made with 💖 by ADAM TECH</div>
        <button className="footer-btn">Visit our Instagram</button>
      </div>

      <div>
        <h1>Important Links</h1>
        {MenuLinks.map((item) => (
          <a href={item.link}>{item.name}</a>
        ))}
      </div>

      <div>
        <h1>Quick Links</h1>
        {MenuLinks.map((item) => (
          <a href={item.link}>{item.name}</a>
        ))}
      </div>

      <div>
        <h1>Address</h1>
        <div className="location">
          <FaMapLocationDot />
          <p>Ras El Oued, Algeria</p>
        </div>
        <div className="phone">
          <IoMdPhonePortrait />
          <p>+213 1234567890</p>
        </div>
      </div>
    </div>
  );
}
