import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/Github";
import GotoTop from "./components/GotoTop";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
// import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Projects /> */}
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
