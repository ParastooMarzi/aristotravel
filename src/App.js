import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ImageGrid from "./Components/ImageGrid";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <ImageGrid />
      <Footer />
    </div>
  );
}

export default App;
