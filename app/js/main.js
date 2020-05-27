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



    $(".rateyo").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
    });


    var mixer = mixitup('.newest__inner');





});