
let slideActive = 'main__slide—active';
let slide = document.querySelectorAll('.main__slide');

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