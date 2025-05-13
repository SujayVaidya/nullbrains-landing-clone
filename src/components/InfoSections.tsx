import React from "react";
import "./InfoSections.css";
import img1 from "@/assets/infoSection/img1.png";
import img2 from "@/assets/infoSection/img2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const BOOST_LIST = [
  "Maximize productivity and growth",
  "Speed past your competition",
  "Learn the top techniques",
];

const AUTO_LIST = [
  "Automated task management workflow",
  "Detailed analytics for your data",
  "Some awesome integrations",
];

const InfoSections: React.FC = () => (
  <section className="info-section">
    {/* Row 1 */}
    <div className="info-section__row">
      <div className="info-section__image">
        <img src={img1} alt="Boost Productivity Illustration" />
      </div>
      <div className="info-section__content">
        <h2>Boost Productivity</h2>
        <p className="info-section__subtitle">
          Build an atmosphere that creates productivity in your organization and
          your company culture.
        </p>
        <div className="info-section__list">
          {BOOST_LIST.map((text, i) => (
            <div key={i} className="info-section__list-item">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="info-section__list-icon"
              />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Row 2 */}
    <div className="info-section__row info-section__row--reverse">
      <div className="info-section__content">
        <h2>Automated Tasks</h2>
        <p className="info-section__subtitle">
          Save time and money with our revolutionary services. We are the
          leaders in the industry.
        </p>
        <div className="info-section__list">
          {AUTO_LIST.map((text, i) => (
            <div key={i} className="info-section__list-item">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="info-section__list-icon"
              />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="info-section__image">
        <img src={img2} alt="Automated Tasks Illustration" />
      </div>
    </div>
  </section>
);

export default InfoSections;
