import React from "react";
import HeroBanner from "../img/intro-bg.png";
import Info from "./Info";

function Hero() {
  const info = {
    title: 'Freedom calls.',
    text: `Answer a call from your surfboard. Ask Siri to send a message.
    Stream your favorite songs on your run. And do it all while
    leaving your phone behind. Introducing Apple Watch Series 3 with
    cellular. Now you have the freedom to go with just your watch.`,
    link: 'Watch the keynote',
  }
  return (
    <>
      <section className="hero">
        <div className="container hero__container">
         <Info title={info.title} text={info.text} link={info.link}/>
        </div>
        <img
          src={HeroBanner}
          width="587px"
          alt="hero__img"
          className="hero__img"
        />
      </section>
      <hr />
    </>
  );
}

export default Hero;
