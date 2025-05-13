import "./TeamSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import type React from "react";

const TEAM = [
  {
    name: "Freddy Smith",
    role: "CEO and Founder",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    bg: "#F7FBEF",
    ring: "#EEF5FF",
  },
  {
    name: "Carl Jones",
    role: "CTO and Co-Founder",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    bg: "#ECFDF3",
    ring: "#D9FAE9",
  },
  {
    name: "Susan Peterson",
    role: "Marketing Directory",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    bg: "#FFF5F2",
    ring: "#FCE8E4",
  },
  {
    name: "Tommy Barnes",
    role: "Designer",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    bg: "#E8F9FF",
    ring: "#D0F1FD",
  },
  {
    name: "Ron Jenson",
    role: "Senior Developer",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    bg: "#E8FFFA",
    ring: "#CCF8F1",
  },
  {
    name: "Pete Tompkins",
    role: "Web Developer",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    bg: "#FFF0F5",
    ring: "#F9DFF3",
  },
  {
    name: "Kelly Richards",
    role: "Sales Manager",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    bg: "#F0FFF7",
    ring: "#D6FCEC",
  },
  {
    name: "Alexis Jordan",
    role: "Affiliate Manager",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    bg: "#F9F1FF",
    ring: "#E8DDFB",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      {/* decorative pill */}
      <div className="team-section__pill" />

      <div className="team-section__inner">
        <p className="team-subtitle">OUR TEAM</p>
        <h2 className="team-title">
          An incredible team of
          <br />
          amazing individuals
        </h2>

        <div className="team-grid">
          {TEAM.map((m) => (
            <div key={m.name} className="team-card">
              <div
                className="photo-wrapper"
                style={
                  {
                    "--bg": m.bg,
                    "--ring": m.ring,
                  } as React.CSSProperties
                }
              >
                <img src={m.img} alt={m.name} className="photo-img" />
              </div>
              <h3 className="card-name">{m.name}</h3>
              <p className="card-role">
                <a href="#">{m.role}</a>
              </p>
              <div className="card-social">
                <a href="#" aria-label={`Twitter – ${m.name}`}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" aria-label={`GitHub – ${m.name}`}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
