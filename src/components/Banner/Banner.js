import "./Banner.css";

export default function Banner({ bannerData }) {
  return (
    <div
      className={
        bannerData.itemColor === "red"
          ? "banner-container red"
          : "banner-container green"
      }
    >
      <div className="left-details">
        <p>{bannerData.discount}</p>
        <h1>{bannerData.title}</h1>
        <p>{bannerData.date}</p>
      </div>

      <div className="banner-img">
        <img src={bannerData.img} alt={bannerData.title} />
      </div>

      <div className="right-details">
        <p className="first-p">{bannerData.rightSubtitle}</p>
        <h1>{bannerData.rightTitle}</h1>
        <p>{bannerData.description}</p>
        <button
          className={
            bannerData.itemColor === "red"
              ? "banner-btn red"
              : "banner-btn green"
          }
        >
          {bannerData.buttonText}
        </button>
      </div>
    </div>
  );
}
