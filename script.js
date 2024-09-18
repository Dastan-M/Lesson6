const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');

function toggleMenu() {
  menu.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);