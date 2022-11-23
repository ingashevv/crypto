$(function () {

    $('.burger__cat-close').on('click', function () {
        $('.burger__cat').removeClass('active');
    });


    $('.burger__close').on('click', function () {
        $('.burger__menu').removeClass('active');
    });

    $('.users__slider-items').slick({
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 376,
              settings: {
                dots: true,
              }
            },
          ]
    });

});
const burgerCatMenu = document.querySelector('.help__cat');
const catMenu = document.querySelector('.burger__cat');

burgerCatMenu && burgerCatMenu.addEventListener('click', function () {
    catMenu.classList.toggle('active');
});

const burgerMenu = document.querySelector('.media__menu');
const headerMenu = document.querySelector('.burger__menu');
burgerMenu && burgerMenu.addEventListener('click', function () {
    headerMenu.classList.toggle('active');
});