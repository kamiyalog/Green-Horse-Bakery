(() => {
  const form = document.querySelector('[data-staff-form]');
  const input = form?.querySelector('input[name="code"]');
  const error = document.querySelector('[data-staff-error]');

  if (!form || !input) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (input.value.trim() === '4796') {
      window.location.href = 'internal/index.html';
      return;
    }

    if (error) error.hidden = false;
    input.value = '';
    input.focus();
  });

  input.addEventListener('input', () => {
    if (error) error.hidden = true;
  });
})();
