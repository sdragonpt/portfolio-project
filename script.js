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

        var menuIcon = document.getElementById('menuIcon');
        if (menuIcon.classList.contains('active')) {
            menuIcon.classList.remove('active');
        }
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

        var menuIcon = document.getElementById('menuIcon');
        if (menuIcon.classList.contains('active')) {
            menuIcon.classList.remove('active');
        }
    });

    var linkToSlide4 = document.querySelector('.mini-menu a[href="#slide4"]');
    if (linkToSlide4) {
        linkToSlide4.addEventListener('click', function (event) {
            event.preventDefault();

            currentSlide = 4;
            scrollToSlide(currentSlide);
            updateIndicadores(currentSlide);
        });
    }

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

    document.getElementById('menuIcon').addEventListener('click', function () {
        this.classList.toggle('active');
    });
});