const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.header__menu');;
const navbar = document.querySelector('.header__navbar');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

hamburger.addEventListener('click',function(){

    if(navbar.classList.contains('open')) {
        navbar.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');    
        });
    }
    else {
        body.classList.add('noscroll');
        navbar.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});
