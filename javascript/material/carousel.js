document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems, options);
    
});

// Or with jQuery

$(document).ready(function () {
    $('.carousel').carousel({
        padding: 75,
        fullWidth: true,
        indicators: true
    });
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
});