import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const servicesSwiper = new Swiper('.services-list-container', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
});
