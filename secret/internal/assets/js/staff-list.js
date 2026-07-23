(() => {
  const login = document.querySelector('[data-directory-login]');
  const form = document.querySelector('[data-directory-form]');
  const content = document.querySelector('[data-directory-content]');
  const error = document.querySelector('[data-directory-error]');

  if (!login || !form || !content) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const staffId = data.get('staffId')?.toString().trim() ?? '';
    const password = data.get('password')?.toString() ?? '';

    if (staffId === 'M145781' && password === '123456') {
      login.hidden = true;
      content.hidden = false;
      content.focus();
      return;
    }

    if (error) error.hidden = false;
  });

  form.addEventListener('input', () => {
    if (error) error.hidden = true;
  });
})();
