import React from "react";
import Card from "./Card";
import "react-multi-carousel/lib/styles.css";

import Jefit from "../assets/projects/Jefit.jpeg";
import Naukri from "../assets/projects/Naukri.jpeg";
import Orbitz from "../assets/projects/Orbitz.jpeg";
import weather from "../assets/projects/weather.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import Chakra from "../assets/chakra.png";
import firebase from "../assets/firebase.png";
import Carousel from "react-multi-carousel";
import snake from '../assets/projects/snake.jpeg';
import trip from "../assets/projects/tripadvisor.png";
import mongo from "../assets/mongodb.png";
import node from "../assets/node.png";
import exjs from "../assets/expressJs.png"
import git from "../assets/git.png"
import gitHub from "../assets/github_b.png";

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
          src={trip}
          name="Tripadvisor (Collaborative)"
          description="Tripadvisor is an American online travel company that operates a website and mobile app with user-generated content and a comparison shopping website.It also offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants."
          demo="https://tripadvisor-rsoni2843.web.app/"
          code="https://github.com/sushantkr961/Tripadvisor-Clone"
          tech1={react}
          tech2={node}
          tech3={Chakra}
          tech4={mongo}
          tech5={exjs}
        />
        <Card
          id="2"
          src={Naukri}
          name="Naukri (Individual)"
          description="A social workout tracking platform that keeps gym goers stay motivated by tracking and analyzing their fitness goals.It offers a personal trainers and wide variety of exercise categories that target particular muscle regions."
          demo="https://shimmering-starburst-c610de.netlify.app/"
          code="https://github.com/sushantkr961/incompetent-string-8638"
          tech1={react}
          tech2={firebase}
          tech3={Chakra}
          tech4={git}
          tech5={gitHub}
        />
        <Card
          id="3"
          src={snake}
          name="Snake Game (Individual)"
          description="Snake game is one of the most popular arcade games of all time.Snake Game has a super simple gameplay,in this game, the main objective of the player is to catch the maximum number of fruits without hitting the wall or itself."
          demo="https://skhungrysnake.netlify.app/"
          code="https://github.com/sushantkr961/Hungry-Snake-Game"
          tech1={html}
          tech2={css}
          tech3={javascript}
          tech4={git}
          tech5={gitHub}
        />
        <Card
          id="4"
          src={Jefit}
          name="Jefit (Collaborative)"
          description="A social workout tracking platform that keeps gym goers stay motivated by tracking and analyzing their fitness goals.It offers a personal trainers and wide variety of exercise categories that target particular muscle regions."
          demo="https://shimmering-starburst-c610de.netlify.app/"
          code="https://github.com/sushantkr961/incompetent-string-8638"
          tech1={html}
          tech2={css}
          tech3={javascript}
          tech4={git}
          tech5={gitHub}
        />
        <Card
          id="5"
          src={Orbitz}
          name="Orbitz (Collaborative)"
          description="A social workout tracking platform that keeps gym goers stay motivated by tracking and analyzing their fitness goals.It offers a personal trainers and wide variety of exercise categories that target particular muscle regions."
          demo="https://shimmering-starburst-c610de.netlify.app/"
          code="https://github.com/sushantkr961/incompetent-string-8638"
          tech1={html}
          tech2={css}
          tech3={javascript}
          tech4={git}
          tech5={gitHub}
        />
        <Card
          id="6"
          src={weather}
          name="Weather (Individual)"
          description="Weather forecasting app where you can search weather by location all over the world and it also shows the forecasting of next seven days. It changes its icon according to the weather."
          demo="https://poetic-capybara-629528.netlify.app/"
          code="https://github.com/sushantkr961/Weather-App"
          tech1={html}
          tech2={css}
          tech3={javascript}
          tech4={git}
          tech5={gitHub}
        />
      </Carousel>
    </div>
  );
};

export default Slider;
