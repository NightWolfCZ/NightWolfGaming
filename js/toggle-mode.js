document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mode-toggle');
  const body = document.body;

  // Načti mód z localStorage (pokud existuje)
  if(localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️';
      localStorage.setItem('mode', 'dark');
    } else {
      toggleBtn.textContent = '🌙';
      localStorage.setItem('mode', 'light');
    }
  });
});