// Toggle Class Active

const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = function(){
    navbarNav.classList.toggle('active');
};