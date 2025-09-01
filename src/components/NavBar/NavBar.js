import { IoMdSearch } from "react-icons/io";
import "./NavBar.css";
import { useState } from "react";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode";

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

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
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
  ];

  const [showInputSearch, setShowInputSearch] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);

  function handleClickSearch() {
    setShowInputSearch(!showInputSearch);
  }

  function handleEnterQuickLinks() {
    setShowQuickLinks(true);
  }

  function handleLeaveQuickLinks() {
    setShowQuickLinks(false);
  }

  return (
    <div className="navbar-container">
      <div className="on-left">
        <div className="logo-name">
          <a href="#">ESHOP</a>
        </div>
        <div className="links">
          <ul className="ul-links">
            {MenuLinks.map((item) => (
              <li className="ul-links-item" key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}

            <li
              className="quick-links"
              onMouseEnter={() => {
                handleEnterQuickLinks();
              }}
              onMouseLeave={() => {
                handleLeaveQuickLinks();
              }}
            >
              <div className="quick-links-name">
                <a href="#">Quick Links</a>
                <span>
                  <FaCaretDown className={showQuickLinks ? "caret-down rotat-caret" : "caret-down"} />
                </span>
              </div>
              {showQuickLinks ? (
                <div className="dropdown-menu">
                  <ul>
                    {DropdownLinks.map((item) => (
                      <li key={item.id}>
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
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
