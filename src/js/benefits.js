const benefitCard_4 = document.querySelector('#card-4');
const benefitCard_5 = document.querySelector('#card-5');
const benefitCard_6 = document.querySelector('#card-6');
const benefitModal_4 = document.querySelector('#benefit-modal-4');
const benefitModal_5 = document.querySelector('#benefit-modal-5');
const benefitModal_6 = document.querySelector('#benefit-modal-6');

benefitCard_4.addEventListener('click', () => {
  benefitModal_4.classList.add('benefit-modal-show');
});

benefitCard_5.addEventListener('click', () => {
  benefitModal_5.classList.add('benefit-modal-show');
});

benefitCard_6.addEventListener('click', () => {
  benefitModal_6.classList.add('benefit-modal-show');
});

benefitModal_4.addEventListener('click', e => {
  e.preventDefault();
  if (e.target === benefitModal_4) {
    benefitModal_4.classList.remove('benefit-modal-show');
  }
});

benefitModal_5.addEventListener('click', e => {
  e.preventDefault();
  if (e.target === benefitModal_5) {
    benefitModal_5.classList.remove('benefit-modal-show');
  }
});

benefitModal_6.addEventListener('click', e => {
  e.preventDefault();
  if (e.target === benefitModal_6) {
    benefitModal_6.classList.remove('benefit-modal-show');
  }
});
