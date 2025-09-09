import "./Blogs.css";
import image1 from "../../assets/blogs/blog-1.jpg";
import image2 from "../../assets/blogs/blog-2.jpg";
import image3 from "../../assets/blogs/blog-3.jpg";

const blogsData = [
  {
    id: 1,
    img: image1,
    date: "Jan 10, 2025 by Dilshad",
    title: "How to choose perfect smartwatch",
    description:
      "Discover the key features to look for in a smartwatch, from fitness tracking to battery life and design.",
  },
  {
    id: 2,
    img: image2,
    date: "Feb 05, 2025 by Dilshad",
    title: "How to choose perfect gadget",
    description:
      "Learn tips on selecting the right gadget that matches your lifestyle, budget, and daily needs.",
  },
  {
    id: 3,
    img: image3,
    date: "Mar 15, 2025 by Dilshad",
    title: "How to choose perfect VR headset",
    description:
      "Explore what makes a great VR headset, including resolution, comfort, and immersive experiences.",
  },
];

export default function Blogs() {
  return (
    <div className="blogs-container" id="blogs">
      <div>
        <h1 className="blogs-title">Our Blogs</h1>
        <p className="blogs-description">Explore Our Blogs</p>
      </div>
      <div className="blogs-items">
        {
          blogsData.map((blog) => (
            <div key={blog.id} className="blog">
              <div className="blog-img">
                <img src={blog.img} alt={blog.title}/>
              </div>
              <div className="date">{blog.date}</div>
              <div className="details">
                <h1 className="blog-title">{blog.title}</h1>
                <p className="blog-description">{blog.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
