import { IoMdSearch } from "react-icons/io";
import "./home.css";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

export default function NavBar() {
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

  const [showInputSearch, setShowInputSearch] = useState(false);

  function handleClickSearch() {
    setShowInputSearch(!showInputSearch);
  }

  return (
    <div className="navbar-container">
      <div className="on-left">
        <div className="logo-name">
          <a href="#">ESHOP</a>
        </div>
        <div className="links">
          <ul>
            {MenuLinks.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="on-right">
        <div className="navbar-search">
          {showInputSearch ? (
            <input type="text" placeholder="Search Products.." />
          ) : null}

          <IoMdSearch
            className="search-icon"
            onClick={() => {
              handleClickSearch();
            }}
          />
        </div>
        <div className="icons">
          <button className="cart-icon">
            <FaCartShopping className="cart-shopping" />
            <div className="orders">4</div>
          </button>
          <div className="dark-mode">
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}
