(() => {
  const form = document.querySelector('[data-contact-form]');
  const complete = document.querySelector('[data-contact-complete]');
  if (!form || !complete) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.hidden = true;
    complete.hidden = false;
    complete.focus();
    complete.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
