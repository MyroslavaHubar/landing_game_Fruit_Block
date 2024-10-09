import Swiper from 'swiper/bundle';
import 'swiper/scss';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.gallerySwiper', {
    loop: true,
    effect: 'coverflow',
    speed: 800,
    breakpoints: {
      320: {
        centeredSlides: false,
        slidesPerView: 1,
      },
      1200: {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: -0.8,
          depth: 20,
          modifier: 10,
          slideShadows: true,
        },
      },
    },
    navigation: {
      nextEl: '.gallery-swiper-btn-next',
      prevEl: '.gallery-swiper-btn-prev',
    },
  });
});





