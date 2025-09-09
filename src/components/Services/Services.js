import "./Services.css";

import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    titel: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    titel: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    titel: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    titel: "Online Supoort 24/7",
    description: "Technical Support 24/7",
  },
];

export default function Services() {
  function getIcon(id) {
    if (id === 1) return <FaCarSide className="service-icon" />;
    if (id === 2) return <FaHeadphonesAlt className="service-icon" />;
    if (id === 3) return <FaWallet className="service-icon" />;
    if (id === 4) return <FaCheckCircle className="service-icon" />;
    return null;
  }

  return (
    <div className="services-container" id="services">
      <div className="services">
        {servicesData.map((item) => (
          <div key={item.id} className="service">
            {getIcon(item.id)}
            <div className="service-details">
              <h1 className="service-title">{item.titel}</h1>
              <p className="service-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
