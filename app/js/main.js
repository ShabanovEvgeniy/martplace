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
        grid: true
    });


    var mixer = mixitup('.newest__inner');





});