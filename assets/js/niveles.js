
(function($) {

    $(document).ready(function() {
        $('body').addClass('js');
        var $menu = $('#menu'),
            $menulink = $('.menu-link');
        
        $menulink.click(function() {
            $menulink.toggleClass('active');
            $menu.toggleClass('active');
            return false;
        });

        // Asegúrate de que esta función esté definida
        // videoPopup();

        $(".Modern-Slider").slick({
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            dots: true,
            pauseOnDotsHover: true,
            cssEase: 'fade',
            // fade: true,
            draggable: false,
            prevArrow: '<button class="PrevArrow"></button>',
            nextArrow: '<button class="NextArrow"></button>'
        });

        $("div.features-post").hover(
            function() {
                $(this).find("div.content-hide").slideToggle("medium");
            },
            function() {
                $(this).find("div.content-hide").slideToggle("medium");
            }
        );

        $("#tabs").tabs();

        // Inicia la función init inmediatamente
        (function init() {
            function getTimeRemaining(endtime) {
                var t = Date.parse(endtime) - Date.parse(new Date());
                var seconds = Math.floor((t / 1000) % 60);
                var minutes = Math.floor((t / 1000 / 60) % 60);
                var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                var days = Math.floor(t / (1000 * 60 * 60 * 24));
                return {
                    'total': t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
            }
            // Añade más lógica si es necesario

        })(); // Cerrando el IIFE correctamente

    });

})(jQuery); // Cerrando la función principal que usa jQuery correctamente
