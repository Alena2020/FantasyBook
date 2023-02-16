let menuButton = document.querySelector('.menu__button-burger');
let menu = document.querySelector('.menu');

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('active');
});