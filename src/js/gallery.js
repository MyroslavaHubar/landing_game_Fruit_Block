// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';

// const swiper = new Swiper('.gallerySwiper', {
//   modules: [Navigation, Pagination],
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 3,
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
//   initialSlide: 1,
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },

//     1200: {
//       slidesPerView: 3,
//     },
//   },
// });

// swiper.on('slideChange', () => {
//   const slides = document.querySelectorAll('.g-s-slide');
//   slides.forEach(slide => slide.classList.remove('center-slide'));
//   const activeIndex = swiper.activeIndex;
//   slides[activeIndex].classList.add('center-slide');
// });

// const initialSlides = document.querySelectorAll('.g-s-slide');
// initialSlides[swiper.initialSlide].classList.add('center-slide');

// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';

// const swiper = new Swiper('.gallerySwiper', {
//   modules: [Navigation],
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 3,
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   initialSlide: 1,
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     1200: {
//       slidesPerView: 3,
//     },
//   },
// });

// swiper.on('slideChange', () => {
//   const slides = document.querySelectorAll('.g-s-slide');
//   slides.forEach(slide => slide.classList.remove('center-slide'));
//   const activeIndex = swiper.activeIndex;
//   slides[activeIndex].classList.add('center-slide');
// });

// const initialSlides = document.querySelectorAll('.g-s-slide');
// initialSlides[swiper.initialSlide].classList.add('center-slide');

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

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
  const slides = document.querySelectorAll('.g-s-slide');
  slides.forEach(slide => slide.classList.remove('center-slide'));

  const activeIndex = swiper.activeIndex;
  if (slides[activeIndex]) {
    slides[activeIndex].classList.add('center-slide');
  }
});

const initialSlides = document.querySelectorAll('.g-s-slide');
if (initialSlides[swiper.initialSlide]) {
  initialSlides[swiper.initialSlide].classList.add('center-slide');
}

// const galleryContainer = document.querySelector('.gallery-container');
// const galleryControlsContainer = document.querySelector('.gallery-controls');
// const galleryControls = ['previous', 'next'];
// const galleryItems = document.querySelectorAll('.gallery-item');

// class Carousel {
//   constructor(container, items, controls) {
//     this.carouselContainer = container;
//     this.carouselControls = controls;
//     this.carouselArray = [...items];
//   }

//   updateGallery() {
//     this.carouselArray.forEach(el => {
//       el.classList.remove('gallery-item-1');
//       el.classList.remove('gallery-item-2');
//       el.classList.remove('gallery-item-3');
//       el.classList.remove('gallery-item-4');
//       el.classList.remove('gallery-item-5');
//     });
//     this.carouselArray.slice(0, 5).forEach((el, i) => {
//       el.classList.add(`gallery-item-${i + 1}`);
//     });
//   }

//   setCurrentState(direction) {
//     if (direction.className == 'gallery-controls-previous') {
//       this.carouselArray.unshift(this.carouselArray.pop());
//     } else {
//       this.carouselArray.push(this.carouselArray.shift());
//     }
//     this.updateGallery();
//   }
//   setControls() {
//     this.carouselControls.forEach(control => {
//       const button = document.createElement('button');
//       button.className = `gallery-controls-${control}`;
//       button.innerHTML = '';
//       galleryControlsContainer.appendChild(button);
//     });
//   }

//   useControls() {
//     const triggers = [...galleryControlsContainer.childNodes];
//     triggers.forEach(control => {
//       control.addEventListener('click', e => {
//         e.preventDefault();
//         this.setCurrentState(control);
//       });
//     });
//   }
// }

// const exampleCarousel = new Carousel(
//   galleryContainer,
//   galleryItems,
//   galleryControls
// );

// exampleCarousel.setControls();
// exampleCarousel.useControls();
