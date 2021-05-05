// Targeting DOM element that have class menu-btn && menu-btn__burger
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

// Targeting DOM elements that have class nav && menu-nav
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

// Targeting DOM elements that have class 
const navItems = document.querySelectorAll('.menu-nav__item');

// Targeting DOM element with class year
const year = document.getElementById('year');

// Set the year to update on the copyRight part 
let date = new Date();
let time = date.getFullYear();
year.innerHTML = time;

let showMenu = false;
// Adding Event listeners to Menu Button
menuBtn.addEventListener('click', toggleMenu, false);

// Function Toggle menu Add class to menu-btn element if its clicked its going to do rotate animation
function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}