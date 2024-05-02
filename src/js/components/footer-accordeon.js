'use strict';

const accordeonEl = document.querySelectorAll('.footer-item');

accordeonEl.forEach(item => {
  const openBtn = item.querySelector('.footer-item-title');
  const listEl = item.querySelector('.footer-item-list');

  openBtn.addEventListener('click', () => {
    openBtn.classList.toggle('active');
    listEl.classList.toggle('active');
  });
});
