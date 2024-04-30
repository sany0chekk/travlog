import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.services-list-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
      centeredSlides: true,
    },
  },
});
