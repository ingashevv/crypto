$(function () {

    $('.burger__cat-close').on('click', function () {
        $('.burger__cat').removeClass('active');
    })


});
const burgerMenu = document.querySelector('.help__cat');
const headerMenu = document.querySelector('.burger__cat');

burgerMenu.addEventListener('click', function () {
    headerMenu.classList.toggle('active');
})
