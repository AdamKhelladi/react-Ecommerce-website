import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <div className="project-container">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
