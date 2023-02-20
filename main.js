let menuButton = document.querySelector('.menu__button-burger');
let menuPopup = document.querySelector('#menu-popup');
let body = document.body;
let menu = document.querySelector('#menu-header').cloneNode(1);
let links = Array.from(menu.children);

menuButton.addEventListener('click', function() {
  menuPopup.classList.toggle("open");
  menuButton.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderMenuPopup();
});

function renderMenuPopup() {
  menuPopup.appendChild(menu);
}

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  menuPopup.classList.remove("open");
  menuButton.classList.remove("active");
  body.classList.remove("noscroll");
}