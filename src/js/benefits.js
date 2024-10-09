const benefitCard = document.querySelector('#card-4');
const benefitModal = document.querySelector('#benefit-modal');

benefitCard.addEventListener('click', () => {
  benefitModal.classList.add('benefit-modal-show');
});

benefitModal.addEventListener('click', e => {
  e.preventDefault();
  if (e.target === benefitModal) {
    benefitModal.classList.remove('benefit-modal-show');
  }
});
