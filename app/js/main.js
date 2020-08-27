$(function () {

    $('.top-product__slider').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"> <i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        appendArrows: '.arrows-inner',
        fade: true,
        cssEase: 'linear',


    });

    $('.subscribers__slider').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"> <i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        appendArrows: '.arrows-wrap',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 715,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]


    });

    $('.reviews__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,

    });



    $(".rateyo").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 30,
        to: 600,
        grid: true,
        prefix: '$'
    });

    $('.btn-list').on('click', function () {
        $('.product-item').addClass('list');
        $('.btn-list').addClass('active');
        $('.btn-large').removeClass('active')
    });

    $('.btn-large').on('click', function () {
        $('.product-item').removeClass('list');
        $('.btn-list').removeClass('active');
        $('.btn-large').addClass('active');

    });


    $('.btn-favourites__list').on('click', function () {
        $('.product-card').addClass('list');
        $('.btn-favourites__list').addClass('active');
        $('.btn-favourites').removeClass('active');
    });

    $('.btn-favourites').on('click', function () {
        $('.product-card').removeClass('list');
        $('.btn-favourites__list').removeClass('active');
        $('.btn-favourites').addClass('active');

    });



    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $(".header__btn-menu").on('click', function () {
        $('.header__box').toggleClass('active')
    });

    $(".product-one__tabs .tab").click(function () {
        $(".product-one__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    var mixer = mixitup('.newest__inner');





});