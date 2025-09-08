import "./Partners.css";
import image1 from "../../assets/brand/br-1.png";
import image2 from "../../assets/brand/br-2.png";
import image3 from "../../assets/brand/br-3.png";
import image4 from "../../assets/brand/br-4.png";
import image5 from "../../assets/brand/br-5.png";

export default function Partners() {
  return (
    <div className="partners-container">
      <img src={image1} alt="Partner brand" />
      <img src={image2} alt="Partner brand" />
      <img src={image3} alt="Partner brand" />
      <img src={image4} alt="Partner brand" />
      <img src={image5} alt="Partner brand" />
    </div>
  );
}
