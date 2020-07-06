const mainMenu = document.querySelector('.menu');
const mainHeader = document.querySelector('.main-header');
const profile = document.querySelector('.profile-img');
const back = document.querySelector('.back');
const homePage = document.querySelector('.home');
const aboutPage = document.querySelector('.about');
const projectPage = document.querySelector('.projects');
const contactPage = document.querySelector('.contact');
const homeWrappper = document.querySelector('.home-wrapper');
const aboutWrapper = document.querySelector('.about-wrapper');
const aboutBack = document.querySelector('.back-about');
const projectWrapper = document.querySelector('.project-wrapper');
const projectBack = document.querySelector('.back-project');
const contactWrapper = document.querySelector('.contact-wrapper');
const contactBack = document.querySelector('.back-contact');
const overlay = document.querySelector('.overlay');

let date = new Date().getHours();
let text;
if (date < 12) {
    text =" Good Morning Guest!";
}else if (date < 15) {
    text =" Good Afternoon Guest!";
}else if (date < 18) {
    text =" Good Evening Guest!";
}else{
    text =" Good Night Guest!";
}
document.querySelector(".demo).innerHTML = text;
                       
mainMenu.addEventListener('click', () => {
    mainHeader.classList.add('main-header-display');
    profile.classList.add('profile-img-display');
    mainMenu.classList.add('menu-hidden');
});

back.addEventListener('click', () => {
    mainHeader.classList.remove('main-header-display');
    profile.classList.remove('profile-img-display');
    mainMenu.classList.remove('menu-hidden');
});

homePage.addEventListener('click', () => {
    mainHeader.classList.remove('main-header-display');
    profile.classList.remove('profile-img-display');
    mainMenu.classList.remove('menu-hidden');
});

aboutPage.addEventListener('click', () => {
    aboutWrapper.classList.add('about-wrapper-display');
    mainHeader.classList.remove('main-header-display');
    profile.classList.remove('profile-img-display');
});

aboutBack.addEventListener('click', () => {
    aboutWrapper.classList.remove('about-wrapper-display');
    mainHeader.classList.add('main-header-display');
    profile.classList.add('profile-img-display');
});

projectPage.addEventListener('click', () => {
    projectWrapper.classList.add('project-wrapper-display');
    mainMenu.classList.add('menu-hidden');
    mainHeader.classList.remove('main-header-display');
    profile.classList.remove('profile-img-display');
    homeWrappper.classList.add('home-wrapper-hidden');
    overlay.classList.add('overlay-hidden');
});

projectBack.addEventListener('click', () => {
    projectWrapper.classList.remove('project-wrapper-display');
    mainHeader.classList.add('main-header-display');
    profile.classList.add('profile-img-display');
    overlay.classList.remove('overlay-hidden');
    homeWrappper.classList.remove('home-wrapper-hidden');
});

contactPage.addEventListener('click', () => {
    contactWrapper.classList.add('contact-wrapper-display');
    mainMenu.classList.add('menu-hidden');
    mainHeader.classList.remove('main-header-display');
    profile.classList.remove('profile-img-display');
});

contactBack.addEventListener('click', () => {
    contactWrapper.classList.remove('contact-wrapper-display');
    mainHeader.classList.add('main-header-display');
    profile.classList.add('profile-img-display');
});

