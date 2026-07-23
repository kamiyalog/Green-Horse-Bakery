(() => {
  const menuButton = document.querySelector('.menu-button');
  const globalNav = document.querySelector('.global-nav');

  if (menuButton && globalNav) {
    menuButton.addEventListener('click', () => {
      const isOpen = globalNav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const page = document.body.dataset.page;
  document.querySelectorAll('[data-page-number]').forEach((element) => {
    element.textContent = `${page || '–'} / 25`;
  });
})();
