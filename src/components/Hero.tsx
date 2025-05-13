import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">
        Start Crafting Your{" "}
        <span className="hero__highlight">Next Great Idea</span>
      </h1>
      <p className="hero__subtitle">
        Simplifying the creation of landing pages, blog pages, application pages
        and so much more!
      </p>

      <div className="hero__cta">
        <button className="hero__btn">
          Purchase Now
          <span className="hero__badge">only $15/mo</span>
        </button>
      </div>

      <a href="#learn-more" className="hero__link">
        Learn More
      </a>
    </section>
  );
};

export default Hero;
