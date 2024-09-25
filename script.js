document.addEventListener('DOMContentLoaded', function () {
    var elements = {
        greeting: document.getElementById("greeting"),
        welcome: document.getElementById("welcome"),
        passion: document.getElementById("passion"),
        degree: document.getElementById("degree"),
        data: document.getElementById("data"),
        projects: document.getElementById("projects"),
        summary: document.getElementById("summary"),
        civicaTitle: document.getElementById("civicaTitle"),
        civicaDesc: document.getElementById("civicaDesc"),
        crewardsTitle: document.getElementById("crewardsTitle"),
        crewardsDesc: document.getElementById("crewardsDesc"),
        work: document.getElementById("work"),
        summary2: document.getElementById("summary2"),
        xploraTitle: document.getElementById("xploraTitle"),
        web: document.getElementById("web"),
        xploraDesc: document.getElementById("xploraDesc"),
        jmeTitle: document.getElementById("jmeTitle"),
        back: document.getElementById("back"),
        jmeDesc: document.getElementById("jmeDesc")
    };

    const ptText = {
        greeting: "olá, <br> sou o Sérgio! 👋 <br>",
        welcome: "Bem-vindo ao meu site, onde mostro um pouco do meu trabalho",
        passion: "O desenvolvimento web é uma área que gosto, mas minha verdadeira paixão <br> está na tecnologia.",
        degree: "Atualmente, tenho uma licenciatura em Comunicação e Multimédia pela Universidade de Trás-os-Montes e Alto Douro.",
        data: "1 de Setembro, 2024",
        projects: "projetos",
        summary: "Abaixo está um resumo dos projetos públicos em que trabalhei",
        civicaTitle: "Base de Dados Civica",
        civicaDesc: "Um projeto onde desenvolvi uma base de dados para uma <a href='https://civica.pt/' target='_blank'><u>empresa</u></a>",
        crewardsTitle: "Projeto Crewards",
        crewardsDesc: "Um projeto de front-end de um <a href='https://crewards.gg' target='_blank'><u>website</u></a> para um <a href='https://www.youtube.com/@Classy' target='_blank'><u>Youtuber</u></a>",
        work: "trabalho",
        summary2: "Um resumo da minha experiência de trabalho",
        xploraTitle: "Xplora",
        back:"desenvolvimento back-end, fev 2024 - jul 2024 (estágio)",
        xploraDesc: "O primeiro passo no mundo do desenvolvimento web, onde tive a oportunidade de apoiar a divisão de back-end.",
        jmeTitle: "JME",
        web: "design web, jun 2023 - ago 2023 (estágio)",
        jmeDesc: "Meu primeiro estágio, comecei a entender melhor o mundo do trabalho e, além disso, ajudei a empresa a desenvolver o seu novo site"
    };

    const enText = {
        greeting: "hi there, <br> im Sérgio! 👋 <br>",
        welcome: "Welcome to my website, where I showcase some of my work",
        passion: "Web development is an area I enjoy, but my true passion lies in technology.",
        degree: "Right now I hold a bachelor's degree in Communication & Multimedia from Universidade de Trás-os-Montes e Alto Douro.",
        data: "September 1, 2024",
        projects: "projects",
        summary: "Below is a summary of public projects I've worked on",
        civicaTitle: "Civica Database",
        civicaDesc: "A project where I developed a database for a <a href='https://civica.pt/' target='_blank'><u>company</u></a>",
        crewardsTitle: "Crewards project",
        crewardsDesc: "A front-end project for a <a href='https://crewards.gg' target='_blank'><u>website</u></a> for a <a href='https://www.youtube.com/@Classy' target='_blank'><u>Youtuber</u></a>",
        work: "work",
        summary2: "A summary of my work experience",
        xploraTitle: "Xplora",
        back:"back-end development, feb 2024 - jul 2024 (internship)",
        xploraDesc: "The first step into the world of web development, where I had the opportunity to support the back-end division.",
        jmeTitle: "JME",
        web: "web design, jun 2023 - ago 2023 (internship)",
        jmeDesc: "My first internship, I began to better understand the world of work and in addition, I helped the company develop its new website"
    };

    function switchLanguage(languageText) {
        for (const key in elements) {
            if (elements[key]) {
                elements[key].innerHTML = languageText[key];
            }
        }
    }

    document.getElementById("ptLink").addEventListener("click", function() {
        switchLanguage(ptText);
    });

    document.getElementById("enLink").addEventListener("click", function() {
        switchLanguage(enText);
    });

    // Inicializa o conteúdo em português
    switchLanguage(ptText);
});
