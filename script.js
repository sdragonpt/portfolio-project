document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slide');
    var indicadores = document.querySelectorAll('.indicador');
    var currentSlide = 0;
    var totalSlides = slides.length;
    var isChangingSlide = false;
    var autoRotateInterval;

    function autoRotate() {
        if (isChangingSlide) return;

        currentSlide = (currentSlide + 1) % totalSlides;
        isChangingSlide = true;
        scrollToSlide(currentSlide);

        setTimeout(function () {
            isChangingSlide = false;
        }, 200);

        updateIndicadores(currentSlide);
    }

    autoRotateInterval = setInterval(autoRotate, 20000000);

    document.addEventListener('wheel', function (event) {
        clearInterval(autoRotateInterval);

        if (isChangingSlide) return;

        if (event.deltaY > 0) {
            currentSlide = Math.min(currentSlide + 1, totalSlides - 1);
        } else if (event.deltaY < 0) {
            currentSlide = Math.max(currentSlide - 1, 0);
        }

        isChangingSlide = true;
        scrollToSlide(currentSlide);

        setTimeout(function () {
            isChangingSlide = false;
        }, 800);

        updateIndicadores(currentSlide);
    });

    updateIndicadores(currentSlide);

    indicadores.forEach(function (indicador, index) {
        indicador.addEventListener('click', function () {
            clearInterval(autoRotateInterval);
            currentSlide = index;
            scrollToSlide(currentSlide);
            updateIndicadores(currentSlide);
        });
    });

    function scrollToSlide(slideNumber) {
        var targetSlide = slides[slideNumber];
        targetSlide.scrollIntoView({
            behavior: 'smooth'
        });
    }

    function updateIndicadores(currentSlide) {
        indicadores.forEach(function (indicador, index) {
            if (index === currentSlide) {
                indicador.classList.add('ativo');
            } else {
                indicador.classList.remove('ativo');
            }
        });
    }

    document.getElementById('homeLink').addEventListener('click', function (event) {
        event.preventDefault();  // Prevent the default anchor behavior
        clearInterval(autoRotateInterval);
        currentSlide = 0;
        scrollToSlide(currentSlide);
        updateIndicadores(currentSlide);
    });

    document.getElementById('projectsLink').addEventListener('click', function (event) {
        event.preventDefault();  // Prevent the default anchor behavior
        clearInterval(autoRotateInterval);
        currentSlide = 1;
        scrollToSlide(currentSlide);
        updateIndicadores(currentSlide);
    });
});