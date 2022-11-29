import React from "react";
import Card from "./Card";
import "react-multi-carousel/lib/styles.css";

import Jefit from "../assets/projects/Jefit.jpeg";
import Naukri from "../assets/projects/Naukri.jpeg";
import Orbitz from "../assets/projects/Orbitz.jpeg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import Chakra from "../assets/chakra.png";
import firebase from "../assets/firebase.png";
import Carousel from "react-multi-carousel";
// import github from "../assets/github.png";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="">
      <Carousel responsive={responsive}>
        <Card
          id="1"
          src={Naukri}
          name="Naukri (Individual)"
          description="A social workout tracking platform that keeps gym goers stay motivated by tracking and analyzing their fitness goals.It offers a personal trainers and wide variety of exercise categories that target particular muscle regions."
          demo="https://shimmering-starburst-c610de.netlify.app/"
          code="https://github.com/sushantkr961/incompetent-string-8638"
          tech1={html}
          tech2={css}
          tech3={javascript}
        />
        <Card
          id="1"
          src={Jefit}
          name="Jefit (Collaborative)"
          description="A social workout tracking platform that keeps gym goers stay motivated by tracking and analyzing their fitness goals.It offers a personal trainers and wide variety of exercise categories that target particular muscle regions."
          demo="https://shimmering-starburst-c610de.netlify.app/"
          code="https://github.com/sushantkr961/incompetent-string-8638"
          tech1={html}
          tech2={css}
          tech3={javascript}
        />
        <Card
          id="1"
          src={Orbitz}
          name="Orbitz (Collaborative)"
          description="A social workout tracking platform that keeps gym goers stay motivated by tracking and analyzing their fitness goals.It offers a personal trainers and wide variety of exercise categories that target particular muscle regions."
          demo="https://shimmering-starburst-c610de.netlify.app/"
          code="https://github.com/sushantkr961/incompetent-string-8638"
          tech1={html}
          tech2={css}
          tech3={javascript}
        />
        <Card
          id="1"
          src={Jefit}
          name="Jefit Clone"
          description="A social workout tracking platform that keeps gym goers stay motivated by tracking and analyzing their fitness goals.It offers a personal trainers and wide variety of exercise categories that target particular muscle regions."
          demo="https://shimmering-starburst-c610de.netlify.app/"
          code="https://github.com/sushantkr961/incompetent-string-8638"
          tech1={html}
          tech2={css}
          tech3={javascript}
        />
      </Carousel>
    </div>
  );
};

export default Slider;
