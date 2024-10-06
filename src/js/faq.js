import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.ac-container-about', {
  showMultiple: true,
  duration: 600,
  //   onOpen: function (currentElement) {
  //     const svgIcon = currentElement.querySelector('.ac-about-svg use');
  //     if (svgIcon) {
  //       svgIcon.setAttribute('href', './img/sprite.svg#icon-minus');
  //     }
  //   },
  //   onClose: function (currentElement) {
  //     const svgIcon = currentElement.querySelector('.ac-about-svg use');
  //     if (svgIcon) {
  //       svgIcon.setAttribute('href', './img/sprite.svg#icon-plus');
  //     }
  //   },
});

accordion.open(0);
