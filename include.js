async function includeHTML(id, file) {
  const target = document.getElementById(id);
  if (!target) return;
  const response = await fetch(file);
  target.innerHTML = await response.text();
}

async function setupCommonParts() {
  await includeHTML("header", "header.html");
  await includeHTML("footer", "footer.html");

  const current = document.body.dataset.current;
  if (current) {
    const activeLink = document.querySelector(`[data-nav="${current}"]`);
    if (activeLink) activeLink.classList.add("active");
  }

  const pageNumber = document.getElementById("pageNumber");
  const page = document.body.dataset.page;
  const total = document.body.dataset.total;
  if (pageNumber && page && total) pageNumber.textContent = `${page} / ${total}`;
}

setupCommonParts();
