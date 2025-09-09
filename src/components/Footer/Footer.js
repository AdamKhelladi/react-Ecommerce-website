import "./Footer.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

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
      name: "Services",
      link: "/#services",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blogs",
    },
  ];

  const quickLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#products",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
    {
      id: 3,
      name: "Partners",
      link: "/#partners",
    },
  ];

  return (
    <div className="footer-container">
      <div className="right-footer">
        <div className="logo-name">
          <a href="#">ESHOP</a>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          alias cum
        </p>
        <div className="love-msg">Made with 💖 by ADAM TECH</div>
        <button className="footer-btn">
          <a href="https://www.github.com/AdamKhelladi" target="_blanc">
            Visit My GitHub Account
          </a>
        </button>
      </div>

      <div className="left-footer">
        <div className="imp-links">
          <h1>Important Links</h1>
          {MenuLinks.map((item) => (
            <div>
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
        </div>

        <div className="quick-links">
          <h1>Quick Links</h1>
          {quickLinks.map((item) => (
            <div>
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
        </div>

        <div className="address">
          <h1>Address</h1>
          <div className="location">
            <FaMapLocationDot />
            <p>Ras El Oued, Algeria</p>
          </div>
          <div className="phone">
            <IoMdPhonePortrait />
            <p>+213 1234567890</p>
          </div>
          <div className="social-media">
            <FaSquareInstagram className="social-icon" />
            <IoLogoYoutube className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
