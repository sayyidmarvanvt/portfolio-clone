import Test from "./Test";
import "./app.scss";
import Contact from "./componets/contact/Contact";
import Cursor from "./componets/cursor/Cursor";
import Hero from "./componets/hero/Hero";
import Navbar from "./componets/navbar/Navbar";
import Parallax from "./componets/parallax/Parallax";
import Portfolio from "./componets/portfolio/Portfolio";
import Services from "./componets/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Hompage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
