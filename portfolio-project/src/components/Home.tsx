// src/components/Home.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="px-[28%] text-white h-screen flex-col items-center bg-zinc-700">
      <div>
        <p id="greeting" className="text-3xl font-bold mb-4">
          hi there, <br /> im Sérgio! 👋 <br />
        </p>
        <p id="welcome" className="text-xl">
          Welcome to my website, where I showcase some of my work.
        </p>
        <p id="passion" className="text-xl">
          Web development is an area I enjoy, but my true passion lies in
          technology.
        </p>
        <p id="degree" className="text-xl mb-2">
          Right now I hold a bachelor's degree in Communication & Multimedia
          from Universidade de Trás-os-Montes e Alto Douro.
        </p>
        <p>
          <a id="data" className="text-gray-300 mr-4">
            September 1, 2024
          </a>{" "}
          New Portfolio Project
        </p>
        <div className="logo my-4">
          <a
            href="https://github.com/sdragonpt"
            target="_blank"
            className="mr-4"
          >
            <FontAwesomeIcon icon={faGithub}  size="2x"/>
          </a>
          <a href="https://www.linkedin.com/in/sergionfr/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin}  size="2x"/>
          </a>
        </div>
        <p className="text-mg">© 2024 Sérgio Ribeiro</p>
      </div>
    </div>
  );
};

export default Home;
