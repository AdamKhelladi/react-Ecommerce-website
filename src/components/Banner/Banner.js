import image from "../../assets/hero/headphone.png";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="right-details">
        <p>30% OFF</p>
        <h1>Fine Smile</h1>
        <p>10 Jan to 28 Jan</p>
      </div>
      <div className="banner-img">
        <img src={image} />
      </div>
      <div className="left-details">
        <p>Air Solo Bass</p>
        <h1>Winter Sale</h1>
        <p>
          High-quality sound, deep bass, and all-day comfort. Get yours now at a
          special price!
        </p>
        <button className="banner-btn">Shop Now</button>
      </div>
    </div>
  );
}
