'use strict';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const testimonialsSwiper = new Swiper('.testimonials-swiper-container', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: '.testimonials-next-btn',
    prevEl: '.testimonials-prev-btn',
    lockClass: null,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
