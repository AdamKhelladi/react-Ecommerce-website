import "./Products.css";

import image1 from "../../assets/product/p-1.jpg";
import image2 from "../../assets/product/p-2.jpg";
import image3 from "../../assets/product/p-3.jpg";
import image4 from "../../assets/product/p-4.jpg";
import image5 from "../../assets/product/p-5.jpg";
import image6 from "../../assets/product/p-7.jpg";
import image7 from "../../assets/product/p-1.jpg";
import image8 from "../../assets/product/p-9.jpg";

const productsData = [
  {
    id: 1,
    name: "Boat Rockerz 450",
    price: "$120",
    img: image1,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$150",
    img: image2,
  },
  {
    id: 3,
    name: "JBL Tune 760NC",
    price: "$180",
    img: image3,
  },
  {
    id: 4,
    name: "Skullcandy Crusher Evo",
    price: "$200",
    img: image4,
  },
  {
    id: 5,
    name: "Sennheiser HD 450BT",
    price: "$170",
    img: image5,
  },
  {
    id: 6,
    name: "Beats Studio3 Wireless",
    price: "$300",
    img: image6,
  },
  {
    id: 7,
    name: "AKG K371",
    price: "$150",
    img: image7,
  },
  {
    id: 8,
    name: "Anker Soundcore Life Q35",
    price: "$130",
    img: image8,
  },
];

export default function Products() {
  return (
    <div className="products-container">
      <div>
        <h1 className="products-title">Our Products</h1>
        <p className="products-description">Explore Our Products</p>
      </div>
      <div className="boxes">
        {productsData.map((item) => (
          <div key={item.id} className="box">
            <div className="product-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="product-details">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
