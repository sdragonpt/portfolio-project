document.addEventListener('DOMContentLoaded', function () {
    // Selecionar todos os slides e indicadores
    var slides = document.querySelectorAll('.slide');
    var indicadores = document.querySelectorAll('.indicador');
    var currentSlide = 0; // Slide inicial
    var totalSlides = slides.length;
    var isChangingSlide = false; // Estado para evitar mudanças rápidas
    var autoRotateInterval;

    // 1. Definir títulos para cada slide
    var slideTitles = [
        'Sérgio Ribeiro',
        'Sérgio Ribeiro | Projetos',
        // Adicione mais títulos conforme necessário para cada slide
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

        // Avançar para o próximo slide
        currentSlide = (currentSlide + 1) % totalSlides;
        isChangingSlide = true;
        scrollToSlide(currentSlide); // Rolagem suave para o slide atual

        // Permitir mudanças após um curto intervalo
        setTimeout(function () {
            isChangingSlide = false;
        }, 200);

        updateIndicadores(currentSlide); // Atualizar indicadores
        updateTitle(currentSlide); // Atualizar o título da página
    }

    // 4. Definir intervalo de rotação automática (20 segundos)
    autoRotateInterval = setInterval(autoRotate, 20000); // 20000 ms = 20 segundos

    // 5. Manipulador de eventos de roda para navegar entre os slides
    document.addEventListener('wheel', function (event) {
        clearInterval(autoRotateInterval); // Parar a rotação automática ao interagir

        if (isChangingSlide) return; // Evitar mudanças rápidas

        if (event.deltaY > 0) {
            // Scroll para baixo: próximo slide
            currentSlide = Math.min(currentSlide + 1, totalSlides - 1);
        } else if (event.deltaY < 0) {
            // Scroll para cima: slide anterior
            currentSlide = Math.max(currentSlide - 1, 0);
        }

        isChangingSlide = true;
        scrollToSlide(currentSlide); // Rolagem suave para o slide atual

        // Permitir mudanças após um intervalo maior
        setTimeout(function () {
            isChangingSlide = false;
        }, 800);

        updateIndicadores(currentSlide); // Atualizar indicadores
        updateTitle(currentSlide); // Atualizar o título da página
    });

    // 6. Atualizar indicadores e título no carregamento inicial
    updateIndicadores(currentSlide);
    updateTitle(currentSlide); // Definir o título inicial

    // 7. Manipuladores de clique para indicadores
    indicadores.forEach(function (indicador, index) {
        indicador.addEventListener('click', function () {
            clearInterval(autoRotateInterval); // Parar a rotação automática
            currentSlide = index; // Definir o slide atual com base no indicador clicado
            scrollToSlide(currentSlide); // Rolagem suave para o slide atual
            updateIndicadores(currentSlide); // Atualizar indicadores
            updateTitle(currentSlide); // Atualizar o título da página
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
    // Exemplo para 'homeLink' e 'projectsLink'. Adicione mais conforme necessário.
    var homeLink = document.getElementById('homeLink');
    if (homeLink) {
        homeLink.addEventListener('click', function (event) {
            event.preventDefault();  // Prevenir o comportamento padrão do link
            clearInterval(autoRotateInterval); // Parar a rotação automática
            currentSlide = 0; // Definir para o slide 'Home'
            scrollToSlide(currentSlide); // Rolagem suave para o slide 'Home'
            updateIndicadores(currentSlide); // Atualizar indicadores
            updateTitle(currentSlide); // Atualizar o título da página
        });
    }

    var projectsLink = document.getElementById('projectsLink');
    if (projectsLink) {
        projectsLink.addEventListener('click', function (event) {
            event.preventDefault();  // Prevenir o comportamento padrão do link
            clearInterval(autoRotateInterval); // Parar a rotação automática
            currentSlide = 1; // Definir para o slide 'Projetos'
            scrollToSlide(currentSlide); // Rolagem suave para o slide 'Projetos'
            updateIndicadores(currentSlide); // Atualizar indicadores
            updateTitle(currentSlide); // Atualizar o título da página
        });
    }

    // 11. Definir o título inicial no carregamento
    updateTitle(currentSlide);
});
