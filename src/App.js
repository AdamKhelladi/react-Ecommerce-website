import "./App.css";
import Category from "./components/ Category/Category";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <div className="project-container">
        <NavBar />
        <Hero />
        <Category />
        <Services />
        <Banner />
      </div>
    </div>
  );
}

export default App;
