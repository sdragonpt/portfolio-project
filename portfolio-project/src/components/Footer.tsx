// src/components/Footer.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar: React.FC = () => {
  return (
    <div className="">
      <div className="logo my-4 mt-8">
        <a href="https://github.com/sdragonpt" target="_blank" className="mr-4">
          <FontAwesomeIcon icon={faGithub} size="2x" color="grey" />
        </a>
        <a href="https://www.linkedin.com/in/sergionfr/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="grey" />
        </a>
      </div>
      <p className="text-zinc-400">© 2024 Sérgio Ribeiro</p>
    </div>
  );
};

export default Navbar;
