import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Headers from "./Components/HeaderComponents";
import Hero from "./Components/HeroComponents";
import Footer from "./Components/Footer";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
function App() {
  return (
    <>
      <header className="bg-dark">
        <Headers />
      </header>
      <section className=" costume d-flex justify-content-center align-items-center bg-dark">
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="About" element={<About/>} />
        </Routes>
      </section>
      {/* Rendering the Footer */}
      <Footer />
    </>
  );
}

export default App;
