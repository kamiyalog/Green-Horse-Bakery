(() => {
  const button = document.querySelector('.internal-menu-button');
  const navigation = document.querySelector('.internal-nav');

  if (button && navigation) {
    button.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const page = document.body.dataset.page;
  document.querySelectorAll('[data-internal-page-number]').forEach((element) => {
    element.textContent = `${page || '–'} / 25`;
  });
})();
