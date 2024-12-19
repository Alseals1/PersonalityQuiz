import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import Parallax from "./components/parallax/parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Homepage">
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="porfolio" />
      </section>
      <section>Port 1</section>
      <section>Port 2</section>
      <section>Port 2</section>
      <section id="Contact">Contact</section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
