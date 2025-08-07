function scrollToSection(id) {
  const sekce = document.getElementById(id);
  if (sekce) {
    sekce.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn("Sekce '" + id + "' nebyla nalezena.");
  }
}

fetch('menu.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;

    // Inicializace až po vložení menu
    const toggleBtn = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".runove-menu");

    toggleBtn.addEventListener("click", () => {
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });
  });
