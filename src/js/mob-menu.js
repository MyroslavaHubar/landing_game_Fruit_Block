export default function openMenu() {
  const menuBtn = document.getElementById('burger');
  const closeBtn = document.querySelector('.close-mob-menu');
  const menu = document.querySelector('.mob-menu');
  const menuLinks = document.querySelectorAll('.mob-menu-list a');

  function toggleMenu() {
    if (menu.style.transform === 'translateX(0%)') {
      menu.style.transform = 'translateX(-100%)';
    } else {
      menu.style.transform = 'translateX(0%)';
    }
  }

  function closeMenu() {
    menu.style.transform = 'translateX(-100%)';
  }

  menuBtn.addEventListener('click', function (event) {
    toggleMenu();
    event.stopPropagation();
  });

  closeBtn.addEventListener('click', function (event) {
    closeMenu();
    event.stopPropagation();
  });

  document.addEventListener('click', function (event) {
    if (
      menu.style.transform === 'translateX(0%)' &&
      !menu.contains(event.target)
    ) {
      closeMenu();
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });
}

document.addEventListener('DOMContentLoaded', openMenu);
