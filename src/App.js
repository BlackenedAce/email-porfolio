import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import {NavBar} from "./components/NavBar";
import Porfolio from "./components/Porfolio";
import SocialLinks from "./components/SocialLinks";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div> 
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Porfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
