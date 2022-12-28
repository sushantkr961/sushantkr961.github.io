import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/Github";
import GotoTop from "./components/GotoTop";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="">
      <AnimatedCursor
        color="0,0,0"
        innerSize={10}
        outerSize={20}
        outerAlpha={0.3}
        innerScale={0.9}
        outerScale={5}
      />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Github />
      <Skills />
      <Contact />
      <SocialLinks />
      <GotoTop />
    </div>
  );
}

export default App;
