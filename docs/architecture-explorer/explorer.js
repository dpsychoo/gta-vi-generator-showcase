(() => {
  "use strict";
  const root = document.documentElement;
  const themeButton = document.querySelector("#theme-toggle");
  const preference = window.matchMedia("(prefers-color-scheme: dark)");
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("sgx-explorer-theme"); } catch (_) { /* La lectura local funciona sin almacenamiento. */ }
  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    themeButton.setAttribute("aria-pressed", String(theme === "dark"));
    themeButton.textContent = theme === "dark" ? "Tema claro" : "Tema oscuro";
  };
  applyTheme(savedTheme === "light" || savedTheme === "dark" ? savedTheme : preference.matches ? "dark" : "light");
  themeButton.disabled = false;
  themeButton.addEventListener("click", () => {
    savedTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(savedTheme);
    try { localStorage.setItem("sgx-explorer-theme", savedTheme); } catch (_) { /* El tema sigue funcionando en memoria. */ }
  });
  preference.addEventListener("change", (event) => { if (!savedTheme) applyTheme(event.matches ? "dark" : "light"); });

  const query = document.querySelector("#view-search");
  const filters = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll(".view-card")];
  const counter = document.querySelector("#result-count");
  const empty = document.querySelector("#empty-state");
  const emptyMessage = document.querySelector("#empty-message");
  let activeFilter = "all";
  const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const update = () => {
    const terms = normalize(query.value).split(/\s+/).filter(Boolean);
    let count = 0;
    cards.forEach((card) => {
      const searchable = normalize(card.textContent + " " + card.dataset.keywords);
      const matchesState = activeFilter === "all" || card.dataset.state.split(" ").includes(activeFilter);
      const matchesQuery = terms.every((term) => searchable.includes(term));
      card.hidden = !matchesState || !matchesQuery;
      if (!card.hidden) count += 1;
    });
    counter.textContent = `${count} ${count === 1 ? "vista disponible" : "vistas disponibles"}`;
    empty.hidden = count !== 0;
    emptyMessage.textContent = activeFilter === "hypothetical" && !terms.length ? "No se han publicado escenarios hipotéticos. Las vistas actuales tienen fuentes y estados explícitos." : "Prueba otra búsqueda o consulta todas las vistas.";
    filters.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === activeFilter)));
  };
  const reset = () => { query.value = ""; activeFilter = "all"; update(); query.focus(); };
  query.disabled = false;
  query.addEventListener("input", update);
  query.addEventListener("keydown", (event) => { if (event.key === "Escape") { event.preventDefault(); query.value = ""; update(); } });
  filters.forEach((button) => { button.disabled = false; button.addEventListener("click", () => { activeFilter = button.dataset.filter; update(); }); });
  document.querySelector("#reset-search").addEventListener("click", reset);
  update();
})();
