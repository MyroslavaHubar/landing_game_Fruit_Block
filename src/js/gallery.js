import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// const swiper = new Swiper('.gallerySwiper', {
//   modules: [Navigation, Pagination],
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 30,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   rewind: true,
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 0,
//     },
//   },
// });

const swiper = new Swiper('.gallerySwiper', {
  modules: [Navigation, Pagination],
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  rewind: true,
  initialSlide: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

swiper.on('slideChange', () => {
  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach(slide => slide.classList.remove('center-slide'));
  const activeIndex = swiper.activeIndex;
  slides[activeIndex].classList.add('center-slide');
});

const initialSlides = document.querySelectorAll('.swiper-slide');
initialSlides[swiper.initialSlide].classList.add('center-slide');
