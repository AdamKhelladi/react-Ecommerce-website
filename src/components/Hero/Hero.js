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

export default function Hero() {
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
                <p>{item.subtitle}</p>
                <h3>{item.title}</h3>
                <h1>{item.title2}</h1>
                <div>
                  <button>Shop By Category</button>
                </div>
              </div>
              <div className="slide-img">
                <img src={item.img}/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
