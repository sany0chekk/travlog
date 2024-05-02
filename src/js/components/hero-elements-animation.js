'use strict';

const elements = document.querySelectorAll('.hero-img-el');

elements.forEach(element => {
  const delay = Math.random() * 2000; // Випадкова затримка перед початком анімації
  const offsetX = Math.random() * 10 - 5; // Випадкове зміщення по осі X
  const offsetY = Math.random() * 10 - 5; // Випадкове зміщення по осі Y

  setTimeout(() => {
    // Застосовуємо зміщення
    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    // Кожні 4 секунди міняємо зміщення
    setInterval(() => {
      const newX = Math.random() * 10 - 5;
      const newY = Math.random() * 10 - 5;
      element.style.transform = `translate(${newX}px, ${newY}px)`;
    }, 1000);
  }, delay);
});
