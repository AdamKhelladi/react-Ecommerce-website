import "./Category.css";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/gaming.png";
import Image5 from "../../assets/category/vr.png";
import Image6 from "../../assets/category/speaker.png";

const categoryData = [
  {
    id: 1,
    title: "Earphone",
    img: Image1,
  },
  {
    id: 2,
    title: "Watch",
    img: Image2,
  },
  {
    id: 3,
    title: "Laptop",
    img: Image3,
  },
  {
    id: 4,
    title: "playstation",
    img: Image4,
  },
  {
    id: 5,
    title: "VR Box",
    img: Image5,
  },
  {
    id: 6,
    title: "speaker",
    img: Image6,
  },
];

export default function Category() {
  return (
    <div className="category-container">
      <div className="boxes">
        {categoryData.map((box) => (
          <div
            key={box.id}
            className={box.id === 3 || box.id === 4 ? "box wide" : "box"}
          >
            <div className="details">
              <p>Enjoy</p>
              <p>With</p>
              <p>{box.title}</p>
              <button className="browse-btn">Browes</button>
            </div>
            <div className="box-img">
              <img src={box.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
