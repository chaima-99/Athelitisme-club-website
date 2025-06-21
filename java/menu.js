const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');       // show/hide menu
  menuIcon.classList.toggle('bx-x');       // toggle X icon
  menuIcon.classList.toggle('bx-menu');    // toggle hamburger icon
});
