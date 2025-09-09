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
        <p data-aos="slide-right">{bannerData.discount}</p>
        <h1 data-aos="zoom-out">{bannerData.title}</h1>
        <p data-aos="fade-up">{bannerData.date}</p>
      </div>

      <div data-aos="zoom-in" className="banner-img">
        <img src={bannerData.img} alt={bannerData.title} />
      </div>

      <div className="right-details">
        <p data-aos="zoom-out" className="first-p">
          {bannerData.rightSubtitle}
        </p>
        <h1 data-aos="fade-up">{bannerData.rightTitle}</h1>
        <p data-aos="fade-up">{bannerData.description}</p>
        <div data-aos="fade-up" data-aos-offset="0">
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
    </div>
  );
}
