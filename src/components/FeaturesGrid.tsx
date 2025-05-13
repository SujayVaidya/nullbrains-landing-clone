import "./FeaturesGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faBell,
  faBoxOpen,
  faTerminal,
  faThLarge,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faCertificate,
    title: "Certifications",
    desc: "Each of our plan will provide you and your team with certifications.",
  },
  {
    icon: faBell,
    title: "Notifications",
    desc: "Send out notifications to all your customers to keep them engaged.",
  },
  {
    icon: faBoxOpen,
    title: "Bundles",
    desc: "High-quality bundles of awesome tools to help you out.",
  },
  {
    icon: faTerminal,
    title: "Developer Tools",
    desc: "Developer tools to help grow your application and keep it up-to-date.",
  },
  {
    icon: faThLarge,
    title: "Building Blocks",
    desc: "The right kind of building blocks to take your company to the next level.",
  },
  {
    icon: faTicketAlt,
    title: "Coupons",
    desc: "Coupons system to provide special offers and discounts for your app.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="features">
      <div className="features__header">
        <h2 className="features__title">Our Features</h2>
        <p className="features__subtitle">
          Check out our list of awesome features below.
        </p>
      </div>

      <div className="features__grid">
        {features.map(({ icon, title, desc }) => (
          <div className="feature-card" key={title}>
            <div className="feature-card__icon">
              <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="feature-card__name">{title}</h3>
            <p className="feature-card__desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
