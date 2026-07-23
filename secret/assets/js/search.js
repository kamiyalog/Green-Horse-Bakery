(() => {
  const form = document.querySelector('[data-search-form]');
  if (!form) return;

  const normalize = (value) => value
    .trim()
    .replace(/[\s　]+/g, '');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = normalize(new FormData(form).get('q')?.toString() ?? '');

    const destinations = {
      '東雲大悟': 'profile-d-shinonome.html',
      '人体における復元技術の昇華': 'restoration-research.html'
    };

    if (destinations[query]) {
      window.location.href = destinations[query];
      return;
    }

    window.alert('該当する情報は見つかりませんでした。');
  });
})();
