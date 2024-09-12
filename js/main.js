$(function () {
    $('.categories__tab').on('click', function (a) {
        a.preventDefault();
        $('.categories__tab').removeClass('categories__tab--active');
        $(this).addClass('categories__tab--active')

        $('.categories__tabs-content').removeClass('categories__tabs-content--active');
        $($(this).attr('href')).addClass('categories__tabs-content--active');


    });

    $('.popular-login__btn').on('click', function (a) {
        $('.popup-login__bg').removeClass('popup-login__bg--active');
    })

    $('.header__link-login').on('click', function (a) {
        a.preventDefault();
        $('.popup-login__bg').addClass('popup-login__bg--active');
    })

    $('.popular-register__btn').on('click', function (a) {
        $('.popup-register__bg').removeClass('popup-register__bg--active');
    })

    $('.header__link-register').on('click', function (a) {
        a.preventDefault();
        $('.popup-register__bg').addClass('popup-register__bg--active');
    })

    $('.popular-basket__btn').on('click', function (a) {
        $('.popup-basket__bg').removeClass('popup-basket__bg--active');
    })

    $('.header__btn').on('click', function (a) {
        a.preventDefault();
        $('.popup-basket__bg').addClass('popup-basket__bg--active');
    })


    $('.slider__inner').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="next"></button>',
        responsive: [
            {
                breakpoint: 521,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });


});