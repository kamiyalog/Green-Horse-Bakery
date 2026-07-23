(() => {
  const form = document.querySelector('[data-final-answer-form]');
  if (!form) return;

  const normalize = (value) => value
    .trim()
    .replace(/[\s　]+/g, '')
    .replace(/[，,]/g, '、');

  const hash = (value) => {
    let result = 2166136261;

    for (const character of value) {
      result ^= character.codePointAt(0);
      result = Math.imul(result, 16777619);
    }

    return result >>> 0;
  };

  const correctAnswers = {
    director_public: 854737912,
    director_internal: 2765858230,
    former_director: 765588037,
    former_research: 559880728,
    headquarters: 2221344742
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answers = new FormData(form);

    const isCorrect = Object.entries(correctAnswers).every(([name, expected]) => {
      const answer = normalize(answers.get(name)?.toString() ?? '');
      return hash(answer) === expected;
    });

    window.location.href = isCorrect ? 'good.html' : 'bad.html';
  });
})();
