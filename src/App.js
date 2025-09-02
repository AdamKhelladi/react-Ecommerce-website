import "./App.css";
import Category from "./components/ Category/Category";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <div className="project-container">
        <NavBar />
        <Hero />
        <Category />
      </div>
    </div>
  );
}

export default App;
