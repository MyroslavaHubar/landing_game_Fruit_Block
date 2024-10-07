import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.aboutSwiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    rewind: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
});
