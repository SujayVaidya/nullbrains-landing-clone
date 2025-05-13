import React from "react";
import disney from "../assets/disney-2.svg";
import google from "../assets/google-1-1.svg";
import hubspot from "../assets/hubspot.svg";
import yt from "../assets/youtube-6.svg";
import slack from "../assets/slack-2.svg";
import shopify from "../assets/shopify-2.svg";

import "./TrustedBy.css";

const TrustedBy: React.FC = () => (
  <section className="trusted-by">
    <p className="trusted-by__subtitle">TRUSTED BY TOP-LEADING COMPANIES.</p>
    <section className="trusted-by__logos">
      <img src={disney} className="trusted-by__logo" />
      <img src={google} className="trusted-by__logo" />
      <img src={hubspot} className="trusted-by__logo" />
      <img src={yt} className="trusted-by__logo" />
      <img src={slack} className="trusted-by__logo" />
      <img src={shopify} className="trusted-by__logo" />
    </section>
  </section>
);

export default TrustedBy;
