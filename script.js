document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slide');
    var indicadores = document.querySelectorAll('.indicador');
    var currentSlide = 0;
    var isChangingSlide = false;
    var autoRotateInterval;
    var startX, startY, distX, distY; // Variáveis para armazenar os valores de toque


    // 1. Definir títulos para cada slide
    var slideTitles = [
        'Sérgio Ribeiro',
        'Sérgio Ribeiro | Projects',
        'Sérgio Ribeiro | Work'
    ];

    // 2. Função para atualizar o título da página
    function updateTitle(slideNumber) {
        if (slideTitles[slideNumber]) {
            document.title = slideTitles[slideNumber];
        } else {
            document.title = 'Sérgio Ribeiro';
        }
    }

    // 3. Função para rotacionar automaticamente os slides
    function autoRotate() {
        if (isChangingSlide) return; // Evitar múltiplas mudanças simultâneas

        currentSlide = (currentSlide + 1) % totalSlides;
        isChangingSlide = true;
        scrollToSlide(currentSlide);

        setTimeout(function () {
            isChangingSlide = false;
        }, 200);

        updateIndicadores(currentSlide);
        updateTitle(currentSlide);
    }

    // 4. Definir intervalo de rotação automática (200 segundos)
    autoRotateInterval = setInterval(autoRotate, 200000);

    // Eventos de toque (touch events) para dispositivos móveis
    document.addEventListener('touchstart', function (event) {
        clearInterval(autoRotateInterval);
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    });

    document.addEventListener('touchmove', function (event) {
        distX = event.touches[0].clientX - startX;
        distY = event.touches[0].clientY - startY;
    });

    document.addEventListener('touchend', function () {
        if (isChangingSlide) return;

        if (Math.abs(distY) > Math.abs(distX)) { // Vertical swipe
            if (distY > 0) {
                currentSlide = Math.max(currentSlide - 1, 0);
            } else {
                currentSlide = Math.min(currentSlide + 1, slides.length - 1);
            }

            isChangingSlide = true;
            scrollToSlide(currentSlide);
            setTimeout(() => isChangingSlide = false, 800);

            updateIndicadores(currentSlide);
            updateTitle(currentSlide);
        }
    });

    // 5. Manipulador de eventos de roda para navegar entre os slides
    document.addEventListener('wheel', function (event) {
        clearInterval(autoRotateInterval); 

        if (isChangingSlide) return;

        if (event.deltaY > 0) {
            currentSlide = Math.min(currentSlide + 1, slides.length - 1);
        } else if (event.deltaY < 0) {
            currentSlide = Math.max(currentSlide - 1, 0);
        }

        isChangingSlide = true;
        scrollToSlide(currentSlide);

        setTimeout(function () {
            isChangingSlide = false;
        }, 800);

        updateIndicadores(currentSlide);
        updateTitle(currentSlide);
    });

    // 6. Atualizar indicadores e título no carregamento inicial
    updateIndicadores(currentSlide);
    updateTitle(currentSlide);

    // 7. Manipuladores de clique para indicadores
    indicadores.forEach(function (indicador, index) {
        indicador.addEventListener('click', function () {
            clearInterval(autoRotateInterval);
            currentSlide = index;
            scrollToSlide(currentSlide);
            updateIndicadores(currentSlide);
            updateTitle(currentSlide);
        });
    });

    // 8. Função para rolar suavemente para o slide especificado
    function scrollToSlide(slideNumber) {
        var targetSlide = slides[slideNumber];
        targetSlide.scrollIntoView({
            behavior: 'smooth'
        });
    }

    // 9. Função para atualizar os indicadores ativos
    function updateIndicadores(currentSlide) {
        indicadores.forEach(function (indicador, index) {
            if (index === currentSlide) {
                indicador.classList.add('ativo');
            } else {
                indicador.classList.remove('ativo');
            }
        });
    }

    // 10. Manipuladores de clique para links de navegação
    var homeLink = document.getElementById('homeLink');
    if (homeLink) {
        homeLink.addEventListener('click', function (event) {
            event.preventDefault();
            clearInterval(autoRotateInterval);
            currentSlide = 0;
            scrollToSlide(currentSlide);
            updateIndicadores(currentSlide);
            updateTitle(currentSlide);
        });
    }

    var projectsLink = document.getElementById('projectsLink');
    if (projectsLink) {
        projectsLink.addEventListener('click', function (event) {
            event.preventDefault();
            clearInterval(autoRotateInterval);
            currentSlide = 1;
            scrollToSlide(currentSlide);
            updateIndicadores(currentSlide);
            updateTitle(currentSlide);
        });
    }

    var workLink = document.getElementById('workLink');
    if (workLink) {
        workLink.addEventListener('click', function (event) {
            event.preventDefault();
            clearInterval(autoRotateInterval);
            currentSlide = 2;
            scrollToSlide(currentSlide);
            updateIndicadores(currentSlide);
            updateTitle(currentSlide);
        });
    }

    function switchLanguage(languageText) {
        for (const key in elements) {
            if (elements[key]) {
                elements[key].innerHTML = languageText[key];
            }
        }
        // Voltar ao primeiro slide com transição suave após troca de idioma
        setTimeout(function() {
            if(currentSlide == 0){
                currentSlide = 0;
                scrollToSlide(currentSlide);
                updateIndicadores(currentSlide);
                updateTitle(currentSlide);
            }
            else if(currentSlide == 1){
                currentSlide = 1;
                scrollToSlide(currentSlide);
                updateIndicadores(currentSlide);
                updateTitle(currentSlide);
            }
            else{
                currentSlide = 2;
                scrollToSlide(currentSlide);
                updateIndicadores(currentSlide);
                updateTitle(currentSlide);
            }
        }, 0);
    }

    // function switchLanguage(languageText) {
    //     // Atualizar o conteúdo dos elementos com o novo idioma
    //     for (const key in elements) {
    //         if (elements[key]) {
    //             elements[key].innerHTML = languageText[key];
    //         }
    //     }
    
    //     // Garantir que o slide atual continue visível
    //     setTimeout(() => {
    //         // Manter o slide atual visível
    //         scrollToSlide(currentSlide);
    //     }, 0);
    // }    
    
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
        crewardsDesc: "Um projeto de front-end de um <a href='https://crewards.gg' target='_blank'><u>website</u></a> para um <a href='https://www.youtube.com/@Classy' target='_blank'><u>Youtuber</u></a>",
        work: "trabalho",
        summary2: "Um resumo da minha experiência de trabalho",
        xploraTitle: "Xplora",
        back:"desenvolvimento back-end, fev 2024 - jul 2024 (estágio)",
        xploraDesc: "O primeiro passo no mundo do desenvolvimento web, onde tive a oportunidade de apoiar a divisão de back-end para desenvolver o novo backoffice.",
        jmeTitle: "JME",
        web: "design web, jun 2023 - ago 2023 (estágio)",
        jmeDesc: "Meu primeiro estágio, comecei a entender melhor o mundo do trabalho e, além disso, ajudei a empresa a desenvolver o seu novo site"
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
        crewardsDesc: "A front-end project for a <a href='https://crewards.gg' target='_blank'><u>website</u></a> for a <a href='https://www.youtube.com/@Classy' target='_blank'><u>Youtuber</u></a>",
        work: "work",
        summary2: "A summary of my work experience",
        xploraTitle: "Xplora",
        back:"back-end development, fev 2024 - jul 2024 (internship)",
        xploraDesc: "The first step into the world of web development, where I had the opportunity to support the back-end division to develop the new backoffice",
        jmeTitle: "JME",
        web: "web design, jun 2023 - ago 2023 (internship)",
        jmeDesc: "My first internship, I began to better understand the world of work and in addition, I helped the company develop its new website"
    };

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
