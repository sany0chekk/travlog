import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const destinationSwiper = new Swiper('.dest-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.dest-next',
    prevEl: '.dest-prev',
    lockClass: null,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    880: {
      slidesPerView: 3,
    },
  },
});
