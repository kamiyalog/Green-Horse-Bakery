(() => {
  const form = document.querySelector('[data-internal-search-form]');
  if (!form) return;

  const normalize = (value) => value
    .trim()
    .replace(/[\s　]+/g, '')
    .replace(/[、，]/g, ',');

  const destinations = {
    '精神の摩耗による疑似的な記憶の定着と誘導': 'memory-report.html',
    'ID変更手続き': 'id-change.html',
    '東雲元樹': 'profile-m-shinonome.html',
    '明坂泰作': 'minister-article.html',
    'にっぽん再生': 'japan-renewal-project.html',
    '依存性の向上及び,記憶の改修,人格創成の実現': 'dependency-personality-report.html',
    '赤池雄二': 'recording-akaike.html',
    '明坂灯里': 'akari-incident.html',
    '赤池音夢': 'request.html'
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = normalize(new FormData(form).get('q')?.toString() ?? '');

    if (destinations[query]) {
      window.location.href = destinations[query];
      return;
    }

    window.alert('該当する内部データは存在しません。');
  });
})();
