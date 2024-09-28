// src/components/Home.tsx
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Sérgio Ribeiro"; // Título da página
  }, []);

  return (
    <div className="lg:px-[20%] xl:px-[28%] px-10 text-white flex flex-col 2xl:mt-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 50 }} // Estado ao sair
        transition={{ duration: 1 }} // Duração da animação
      >
        <p id="greeting" className="text-3xl font-extrabold mb-4">
          hi there, <br /> im Sérgio! 👋 <br />
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 50 }} // Estado ao sair
        transition={{ duration: 1, delay: 0.2 }} // Duração da animação com atraso
      >
        <p id="welcome" className="text-xl mb-2">
          Welcome to my website, where I showcase some of my work.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 50 }} // Estado ao sair
        transition={{ duration: 1, delay: 0.4 }} // Duração da animação com atraso
      >
        <p id="passion" className="text-xl mb-2">
          Web development is an area I enjoy, but my true passion lies in
          technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 50 }} // Estado ao sair
        transition={{ duration: 1, delay: 0.6 }} // Duração da animação com atraso
      >
        <p id="degree" className="text-xl mb-4">
          Right now I hold a bachelor's degree in Communication & Multimedia
          from Universidade de Trás-os-Montes e Alto Douro.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 50 }} // Estado ao sair
        transition={{ duration: 1, delay: 0.8 }} // Duração da animação com atraso
      >
        <p>
          <a id="data" className="text-zinc-300 mr-4">
            September 1, 2024
          </a>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 50 }} // Estado ao sair
        transition={{ duration: 1, delay: 1 }} // Duração da animação com atraso
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
