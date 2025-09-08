import "./Partners.css";

import image1 from "../../assets/brand/br-1.png";
import image2 from "../../assets/brand/br-2.png";
import image3 from "../../assets/brand/br-3.png";
import image4 from "../../assets/brand/br-4.png";
import image5 from "../../assets/brand/br-5.png";

export default function Partners() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="partners-wrapper">
      <div className="partners-container">
        {images.map((img, index) => (
          <img key={`first-${index}`} src={img} alt="Partner brand" />
        ))}

        {images.map((img, index) => (
          <img key={`second-${index}`} src={img} alt="Partner brand" />
        ))}
      </div>
    </div>
  );
}
