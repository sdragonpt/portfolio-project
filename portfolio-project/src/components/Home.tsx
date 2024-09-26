// src/components/Home.tsx
import Footer from './Footer';

const Home = () => {
  return (
    <div className="px-[28%] text-white flex flex-col">
      <div>
        <p id="greeting" className="text-3xl font-extrabold mb-4">
          hi there, <br /> im Sérgio! 👋 <br />
        </p>
        <p id="welcome" className="text-xl mb-2">
          Welcome to my website, where I showcase some of my work.
        </p>
        <p id="passion" className="text-xl mb-2">
          Web development is an area I enjoy, but my true passion lies in
          technology.
        </p>
        <p id="degree" className="text-xl mb-4">
          Right now I hold a bachelor's degree in Communication & Multimedia
          from Universidade de Trás-os-Montes e Alto Douro.
        </p>
        <p>
          <a id="data" className="text-zinc-300 mr-4">
            September 1, 2024
          </a>{" "}
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
