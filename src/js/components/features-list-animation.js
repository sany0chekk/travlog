'use strict';

const itemsEl = document.querySelectorAll('.features-item');
let currentIndex = 0;

itemsEl[currentIndex].classList.add('active');

setInterval(() => {
  itemsEl.forEach(item => item.classList.remove('active'));
  itemsEl[currentIndex].classList.add('active');
  currentIndex = (currentIndex + 1) % itemsEl.length;
}, 2000);
