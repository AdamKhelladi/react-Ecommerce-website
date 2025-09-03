import "./Products.css";

const productsData = [
  {
    id: 1,
    name: "Boat Rockerz 450",
    price: "$120",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$150",
  },
  {
    id: 3,
    name: "JBL Tune 760NC",
    price: "$180",
  },
  {
    id: 4,
    name: "Skullcandy Crusher Evo",
    price: "$200",
  },
  {
    id: 5,
    name: "Sennheiser HD 450BT",
    price: "$170",
  },
  {
    id: 6,
    name: "Beats Studio3 Wireless",
    price: "$300",
  },
  {
    id: 7,
    name: "AKG K371",
    price: "$150",
  },
  {
    id: 8,
    name: "Anker Soundcore Life Q35",
    price: "$130",
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
              <img src={hey} alt="Product image" />
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
