// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.reviews-swiper', {
  slidesPerView: 1,

  spaceBetween: 20,

  autoplay: {
    delay: 4000,
  },

  loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
