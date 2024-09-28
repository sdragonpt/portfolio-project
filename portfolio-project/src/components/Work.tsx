// src/components/Work.tsx
import React, { useEffect } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Work: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo quando o componente é montado
    document.title = "Sérgio Ribeiro | Work"; // Título da página 
  }, []);

  return (
    <motion.section
      id="work"
      className="lg:px-[20%] xl:px-[28%] px-10 text-white flex-col items-center 2xl:mt-8"
      initial={{ opacity: 0, x: -150 }} // Aumentando a distância inicial
      animate={{ opacity: 1, x: 0 }} // Estado final
      exit={{ opacity: 0, x: -150 }} // Estado ao sair
      transition={{ duration: 1 }} // Duração da animação aumentada
    >
      <h2 className="text-3xl font-extrabold">Work Experience</h2>
      <p className="my-4 text-zinc-300">A summary of my work experience</p>
      <hr className="border-t-zinc-800" />

      {/* Trabalho 2 */}
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 30 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 30 }} // Estado ao sair
        transition={{ duration: 0.8, delay: 0.2 }} // Duração da animação com atraso
      >
        <a
          href="https://goxplora.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-1 font-semibold underline-2">Xplora</h2>
        </a>
        <div className="flex flex-wrap mb-3">
          <div>
            <img
              src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white"
              alt="Laravel"
              className="mr-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
              alt="PHP"
              className="mr-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
              className="rounded-sm"
            />
          </div>
        </div>
        <p className="text-sm text-zinc-400">
          back-end development, fev 2024 - jul 2024 (internship)
        </p>
        <p className="mt-3">
          The first step into the world of web development, where I had the
          opportunity to support the back-end division to develop the new
          backoffice.
        </p>
      </motion.div>

      <hr className="border-t-zinc-800" />

      {/* Trabalho 1 */}
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 30 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 30 }} // Estado ao sair
        transition={{ duration: 0.8, delay: 0.5 }} // Duração da animação com atraso maior
      >
        <a href="https://jme.pt" target="_blank" rel="noopener noreferrer">
          <h2 className="mb-1 font-semibold underline-2">JME</h2>
        </a>
        <div className="flex flex-wrap mb-3">
          <div>
            <img
              src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white"
              alt="WordPress"
              className="mr-2 lg:mb-0 mb-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
              alt="Figma"
              className="mr-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
              className="mr-2 rounded-sm"
            />
          </div>
        </div>
        <p className="text-sm text-zinc-400">
          web design, jun 2023 - ago 2023 (internship)
        </p>
        <p className="mt-3">
          My first internship, I began to better understand the world of work
          and in addition, I helped the company develop its new website.
        </p>
      </motion.div>

      <Footer />
    </motion.section>
  );
};

export default Work;
