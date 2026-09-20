// Theme toggle. The pre-paint script in index.html applies any stored choice;
// with nothing stored the page follows the OS setting via prefers-color-scheme.
(function () {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function currentTheme() {
    var explicit = document.documentElement.getAttribute('data-theme');
    if (explicit) return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  toggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) { /* storage blocked — the choice just won't persist */ }
  });
})();
