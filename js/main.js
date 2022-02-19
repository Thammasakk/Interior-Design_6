/*========== SHOW MENU ==========*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*========== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*========== HOVER BUTTON ==========*/
let btn = document.querySelector('.mouse-cursor-gradient-tracking');
btn.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
});


/*========== SCROLL REVEAL ANIMATION ==========*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.home__data');
sr.reveal('.home__img1', {delay: 500});
sr.reveal('.about__title');
sr.reveal('.about__description ', {origin: 'right'});
sr.reveal('.services__head');
sr.reveal('.services__card1', {interval: 300});
sr.reveal('.projects__container');
sr.reveal('.space__title');
sr.reveal('.space__card img', {interval: 300});
sr.reveal('.space__layout h3');
sr.reveal('.space__layout img', {delay: 600, origin: 'bottom'});
sr.reveal('.space__perspective h3');
sr.reveal('.space__perspective img', {delay: 600, origin: 'bottom'});
sr.reveal('.space__texture h3');
sr.reveal('.space__background', {distance: '200px', origin: 'right'});
sr.reveal('.blog__title');
sr.reveal('.blog__description', {interval: 300, origin: 'right', delay: 600});
sr.reveal('.contact__container');
