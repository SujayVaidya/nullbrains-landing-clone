import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://twitter.com/...">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://linkedin.com/...">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/...">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
export default SocialLinks;
