
let slideActive = 'main__slide—active';
let slide = document.querySelectorAll('.main__slide');
let crossButton = document.querySelector('.sidebar_cross');
let navBarShow = document.querySelector('.sidebar');
let burgerButton = document.querySelector('.header__burger');

function activeSlide() {
    let windowWidth =  window.innerWidth;
    
    if(windowWidth > 769) {
        slide[0].classList.add(slideActive);
        slide[1].classList.remove(slideActive);
    } else {
        slide[1].classList.add(slideActive);
        slide[0].classList.remove(slideActive);
    }
}

window.addEventListener('resize', activeSlide);

activeSlide();

crossButton.addEventListener('click', function(){
    navBarShow.classList.remove('sidebar__show');
}); 

burgerButton.addEventListener('click', function(){
    navBarShow.classList.add('sidebar__show');
});