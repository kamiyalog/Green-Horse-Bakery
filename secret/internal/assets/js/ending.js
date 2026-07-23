(() => {
  const shareButton = document.querySelector('[data-share-x]');
  if (!shareButton) return;

  shareButton.addEventListener('click', (event) => {
    event.preventDefault();

    const text = shareButton.dataset.shareText ?? '';
    const parameters = new URLSearchParams({
      text,
      url: 'https://note.com/mei_takanashi/n/n1f73601120c6'
    });

    window.open(
      `https://twitter.com/intent/tweet?${parameters.toString()}`,
      '_blank',
      'noopener,noreferrer,width=680,height=520'
    );
  });
})();
