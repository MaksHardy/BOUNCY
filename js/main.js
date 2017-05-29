$(document).ready(function() {
    

    // isotope
    $('.portfolio__grid').isotope({
        itemSelector: '.portfolio__photo',

    });

    var $container = $('.portfolio__grid');
    $('#filters button').click(function() {
        var $this = $(this);
        if (!$this.hasClass('is-checked')) {
            $this.parents('#options').find('.is-checked').removeClass('is-checked');
            $this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({ itemSelector: '.portfolio__photo', filter: selector });
        return false;
    });
    $('.portfolio__grid').masonry({
        itemSelector: '.portfolio__photo',
        columnWidth: 270,
        // gutter: 1,
    });
    // wow
    new WOW().init();
    // slick slider TEAM
    $('.team__slick').slick({
        dots: true,
        arrows: false,
    });
    // slick slider TEST
    $('.team-slider__slick').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,

    });
    // TOP BUTTON
    $(function() {

        $(window).scroll(function() {

            if ($(this).scrollTop() != 0) {

                $('#toTop').fadeIn();

            } else {

                $('#toTop').fadeOut();

            }

        });

        $('#toTop').click(function() {

            $('body,html').animate({ scrollTop: 0 }, 800);

        });

    });
    // slik-header
    var options = {
        offset: '#showHere',
        offsetSide: 'toTop',
        classes: {
            clone: 'header--clone',
            stick: 'header--stick',
            unstick: 'header--unstick'
        }
    };

    var banner = new Headhesive('.header', options);
    // slow motion
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
$("body").on("click", ".nav__link", function() {
        $(".nav__list .nav__link").removeClass("nav__link--active");
        $(this).addClass("nav__link--active");
    });
    $(".portfolio__select").on("click", ".portfolio__button", function() {
        $(".portfolio__select .portfolio__button").removeClass("portfolio__button--active");
        $(this).addClass("portfolio__button--active");
    });

});
