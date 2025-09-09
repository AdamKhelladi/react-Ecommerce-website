import Slider from "react-slick";
import "./Hero.css";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "HEADPHONE",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "VIRTUAL",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "LAPTOPS",
  },
];

export default function Hero({ handleClickOrder }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="hero-container" id="home">
      <div>
        <Slider {...settings} className="slider">
          {HeroData.map((item) => (
            <div key={item.id} className="slider-content">
              <div className="details">
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  {item.subtitle}
                </p>
                <h3
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  {item.title}
                </h3>
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  {item.title2}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="0"
                  data-aos-delay="300"
                >
                  <button onClick={handleClickOrder}>Shop By Category</button>
                </div>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-once="true"
                className="slide-img"
              >
                <img src={item.img} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
