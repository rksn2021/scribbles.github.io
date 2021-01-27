const menu = document.querySelector('#mobile-menu');
const menuLinks =document.querySelector('.navbar__menu');
 
const mobileMenu = () => {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
};

menu.addEventListener('click',mobileMenu);
//show active menu scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu=doument.querySelector('#home-page')
    const aboutMenu=document.querySelector('#about-page')
    const scribbles=document.querySelector('#scribble-page')
    let scrollPos = windows.scrollY
    console.log(scrollPos);

    //add 'highlight' class to my items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return;
    }else if(window.innerwidth > 960 && scrollPos < 1400) {

    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    scribblesMenu.classList.remove('highlight')
    return;
    } else if (window.innerwidth > 960 && scrollPos < 2345) {
        scribblesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return;
    }
if((elem && window.innerWIdth < 960 && srollPos < 600) || elem) {
    elem.classList.remove('highlight')
}
};
window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);

//close mobile menu when clicking on a menu item
const hideMobileMenu = ()=> {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <=768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('is-active');
    }
};
menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);
