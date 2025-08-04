function scrollToSection(id) {
  const sekce = document.getElementById(id);
  if (sekce) {
    sekce.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn("Sekce '" + id + "' nebyla nalezena.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
});
