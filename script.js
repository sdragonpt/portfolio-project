document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slide');
    var indicadores = document.querySelectorAll('.indicador');
    var currentSlide = 0;
    var isChangingSlide = false;
    var autoRotateInterval;

    // Definir títulos para cada slide
    var slideTitles = [
        'Sérgio Ribeiro',
        'Sérgio Ribeiro - Projects',
        'Sérgio Ribeiro - Work'
    ];

    function updateTitle(slideNumber) {
        document.title = slideTitles[slideNumber] || 'Sérgio Ribeiro';
    }

    function autoRotate() {
        if (isChangingSlide) return;
        currentSlide = (currentSlide + 1) % slides.length;
        scrollToSlide(currentSlide);
    }

    autoRotateInterval = setInterval(autoRotate, 200000);

    document.addEventListener('wheel', function (event) {
        if (isChangingSlide) return;

        clearInterval(autoRotateInterval);

        if (event.deltaY > 0) {
            currentSlide = Math.min(currentSlide + 1, slides.length - 1);
        } else if (event.deltaY < 0) {
            currentSlide = Math.max(currentSlide - 1, 0);
        }

        scrollToSlide(currentSlide);
    });

    function scrollToSlide(slideNumber) {
        isChangingSlide = true;
        slides[slideNumber].scrollIntoView({ behavior: 'smooth' });

        setTimeout(function () {
            isChangingSlide = false;
        }, 800);

        updateIndicadores(slideNumber);
        updateTitle(slideNumber);
    }

    function updateIndicadores(slideNumber) {
        indicadores.forEach(function (indicador, index) {
            indicador.classList.toggle('ativo', index === slideNumber);
        });
    }

    indicadores.forEach(function (indicador, index) {
        indicador.addEventListener('click', function () {
            clearInterval(autoRotateInterval);
            scrollToSlide(index);
        });
    });

    var homeLink = document.getElementById('homeLink');
    if (homeLink) {
        homeLink.addEventListener('click', function (event) {
            event.preventDefault();
            clearInterval(autoRotateInterval);
            scrollToSlide(0);
        });
    }

    var projectsLink = document.getElementById('projectsLink');
    if (projectsLink) {
        projectsLink.addEventListener('click', function (event) {
            event.preventDefault();
            clearInterval(autoRotateInterval);
            scrollToSlide(1);
        });
    }

    var workLink = document.getElementById('workLink');
    if (workLink) {
        workLink.addEventListener('click', function (event) {
            event.preventDefault();
            clearInterval(autoRotateInterval);
            scrollToSlide(2);
        });
    }

    // Dados dos idiomas
    const ptText = {
        greeting: "olá, <br> sou o Sérgio! 👋 <br>",
        welcome: "Bem-vindo ao meu site, onde mostro um pouco do meu trabalho",
        passion: "O desenvolvimento web é uma área que gosto, mas minha verdadeira paixão <br> está na tecnologia. <br>Já tive a oportunidade de trabalhar como desenvolvedor backend na Xplora e completei um estágio em web design na JME.",
        degree: "Atualmente, tenho uma licenciatura em Comunicação e Multimédia pela Universidade de Trás-os-Montes e Alto Douro.",
        data: "1 de Setembro, 2024",
        projects: "projetos",
        summary: "Abaixo está um resumo dos projetos públicos em que trabalhei",
        civicaTitle: "Base de Dados Civica",
        civicaDesc: "Um projeto onde desenvolvi uma base de dados para uma <a href='https://civica.pt/' target='_blank'><u>empresa</u></a>",
        crewardsTitle: "Projeto Crewards",
        crewardsDesc: "Um projeto de front-end de um <a href='https://crewards.gg' target='_blank'><u>website</u></a> para um <a href='https://www.youtube.com/@Classy' target='_blank'><u>Youtuber</u></a>"
    };

    const enText = {
        greeting: "hi there, <br> im Sérgio! 👋 <br>",
        welcome: "Welcome to my website, where I showcase some of my work",
        passion: "Web development is an area I enjoy, but my true passion lies in technology. I've had the opportunity to work as a backend developer at Xplora and completed an internship in web design at JME.",
        degree: "Right now I hold a bachelor's degree in Communication & Multimedia from Universidade de Trás-os-Montes e Alto Douro.",
        data: "September 1, 2024",
        projects: "projects",
        summary: "Below is a summary of public projects I've worked on",
        civicaTitle: "Civica Database",
        civicaDesc: "A project where I developed a database for a <a href='https://civica.pt/' target='_blank'><u>company</u></a>",
        crewardsTitle: "Crewards project",
        crewardsDesc: "A front-end project for a <a href='https://crewards.gg' target='_blank'><u>website</u></a> for a <a href='https://www.youtube.com/@Classy' target='_blank'><u>Youtuber</u></a>"
    };

    const elements = {
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
        crewardsDesc: document.getElementById("crewardsDesc")
    };

    function switchLanguage(languageText) {
        for (const key in elements) {
            elements[key].innerHTML = languageText[key];
        }
        // Não chamar scrollToSlide aqui
    }

    document.getElementById("ptLink").addEventListener("click", function() {
        switchLanguage(ptText);
    });

    document.getElementById("enLink").addEventListener("click", function() {
        switchLanguage(enText);
    });

    // Atualizar indicadores e título no carregamento inicial
    updateIndicadores(currentSlide);
    updateTitle(currentSlide);
});
