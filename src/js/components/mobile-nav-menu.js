'use strict';

const nav = {
  menu: document.querySelector('.header-mobile'),
  openBtn: document.querySelector('.header-mobile-open'),
  closeBtn: document.querySelector('.header-mobile-close'),
};

nav.openBtn.addEventListener('click', openMenu);
nav.closeBtn.addEventListener('click', closeMenu);

function openMenu(event) {
  nav.menu.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu(event) {
  nav.menu.classList.remove('active');
  document.body.style.overflow = null;
}
