$(function () {

    $('.top-product__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrows-right.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrows-left.png" alt=""></button>',
        fade: true,
        cssEase: 'linear',

    });



    $(".rateyo").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
    });


    var mixer = mixitup('.newest__inner');





});