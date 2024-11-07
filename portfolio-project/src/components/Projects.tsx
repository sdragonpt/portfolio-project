// src/components/Projects.tsx
import React, { useEffect } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo quando o componente é montado
    document.title = "Sérgio Ribeiro | Projects"; // Título da página
  }, []);

  return (
    <motion.section
      id="projects"
      className="lg:px-[20%] xl:px-[28%] px-10 text-white flex-col items-center 2xl:mt-8"
      initial={{ opacity: 0, x: -150 }} // Aumentando a distância inicial
      animate={{ opacity: 1, x: 0 }} // Estado final
      exit={{ opacity: 0, x: -150 }} // Estado ao sair
      transition={{ duration: 1 }} // Duração da animação aumentada
    >
      <h1 className="text-3xl font-extrabold">Projects</h1>
      <p className="my-4 text-zinc-300">
        Below is a summary of public projects I've worked on
      </p>
      <hr className="border-t-zinc-800" />

      {/* Projeto 4 */}
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 30 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 30 }} // Estado ao sair
        transition={{ duration: 0.8, delay: 0.2 }} // Duração da animação com atraso
      >
        <a href="https://crewards-v2.netlify.app" target="_blank">
          <h2 className="mb-1 font-semibold underline-2">Crewards v2</h2>
        </a>
        <div className="flex flex-wrap mb-3">
          <div>
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
              className="mr-2 lg:mb-0 mb-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="Tailwind"
              className="mr-2 lg:mb-0 mb-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
              className="rounded-sm"
            />
          </div>
        </div>
        <p className="mb-2">
          For the same youtuber that gave me my first web project, Crewards v2
          is the redesign of the first Crewards website, but with new features
          and improved performance
        </p>
        <p className="text-sm text-zinc-400">oct 2024 - present</p>
      </motion.div>
      <hr className="border-t-zinc-800" />

      {/* Projeto 3 */}
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 30 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 30 }} // Estado ao sair
        transition={{ duration: 0.8, delay: 0.5 }} // Duração da animação com atraso maior
      >
        <a href="https://civica.pt" target="_blank">
          <h2 className="mb-1 font-semibold underline-2">
            Civica Website Reform
          </h2>
        </a>
        <div className="flex flex-wrap mb-3">
          <div>
            <img
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white"
              alt="HTML5"
              className="mr-2 lg:mb-0 mb-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white"
              alt="CSS3"
              className="mr-2 lg:mb-0 mb-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E"
              alt="JavaScript"
              className="mr-2 lg:mb-0 mb-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="Bootstrap"
              className="mr-2 lg:mb-0 mb-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
              alt="PHP"
              className="rounded-sm"
            />
          </div>
        </div>
        <p className="mb-2">
          Helping the company Civica reforming their website and make a
          store-type page with the use of PHP essentially, the help of bootstrap
          and using phpMyAdmin for the database
        </p>
        <p className="text-sm text-zinc-400">ago 2024 - present</p>
      </motion.div>
      <hr className="border-t-zinc-800" />

      {/* Projeto 2 */}
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 30 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 30 }} // Estado ao sair
        transition={{ duration: 0.8, delay: 0.8 }} // Duração da animação com atraso
      >
        <a href="https://github.com/sdragonpt/python-civica" target="_blank">
          <h2 className="mb-1 font-semibold underline-2">Civica Database</h2>
        </a>
        <div className="mb-3">
          <img
            src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
            alt="Python"
            className="rounded-sm"
          />
        </div>
        <p className="mb-2">
          A project where I developed my first python project, making a database
          for the company Civica
        </p>
        <p className="text-sm text-zinc-400">set 2024</p>
      </motion.div>
      <hr className="border-t-zinc-800" />

      {/* Projeto 1 */}
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 30 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 30 }} // Estado ao sair
        transition={{ duration: 0.8, delay: 1.0 }} // Duração da animação com atraso
      >
        <a href="https://crewards.gg" target="_blank">
          <h2 className="mb-1 font-semibold underline-2">Crewards Project</h2>
        </a>
        <div className="flex mb-3">
          <div>
            <img
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white"
              alt="HTML5"
              className="mr-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white"
              alt="CSS3"
              className="mr-2 rounded-sm"
            />
          </div>
          <div>
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E"
              alt="JavaScript"
              className="rounded-sm"
            />
          </div>
        </div>
        <p className="mb-2">
          My first web project, a simple front-end development for a youtuber
          website
        </p>
        <p className="text-sm text-zinc-400">fev 2023</p>
      </motion.div>

      {/* Projeto 0.1 */}
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 30 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        exit={{ opacity: 0, y: 30 }} // Estado ao sair
        transition={{ duration: 0.8, delay: 1.0 }} // Duração da animação com atraso
      >
        <a href="https://pedroribeiroatleta.pt" target="_blank">
          <h2 className="mb-1 font-semibold underline-2">
            Pedro Ribeiro Atleta
          </h2>
        </a>
        <div className="flex mb-3">
          <div>
            <img
              src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white"
              alt="WordPress"
              className="mr-2 lg:mb-0 mb-2 rounded-sm"
            />
          </div>
        </div>
        <p className="mb-2">
          I was challenged to develop an informative WordPress website for an
          athletics athlete
        </p>
        <p className="text-sm text-zinc-400">jan 2023</p>
      </motion.div>
      <Footer />
    </motion.section>
  );
};

export default Projects;
