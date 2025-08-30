import "./home.css";

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

  return (
    <div className="navbar-container">
      <div className="on-left">
        <div className="logo-name">
          <a href="#">ESHOP</a>
        </div>
        <div className="links">
          <ul>
            {MenuLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="on-right">
        <div className="icons">
          <div className="icon-1">Icon One</div>
          <div className="icon-2">Icon Two</div>
        </div>
      </div>
    </div>
  );
}
