const accordionFaq = document.getElementsByClassName('accordion-content');

function toggleAccordion(content) {
  const panel = content.querySelector('.accordion-panel');

  if (panel) {
    content.classList.toggle('active');

    if (content.classList.contains('active')) {
      panel.style.height = panel.scrollHeight + 'px';
    } else {
      panel.style.height = '0';
    }
  }
}

for (let i = 0; i < accordionFaq.length; i++) {
  accordionFaq[i].addEventListener('click', function () {
    toggleAccordion(this);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (accordionFaq.length > 0) {
    const firstAccordion = accordionFaq[0];
    const firstPanel = firstAccordion.querySelector('.accordion-panel');

    if (firstPanel) {
      firstAccordion.classList.add('active');
      firstPanel.style.height = firstPanel.scrollHeight + 'px';
    }
  }
});
