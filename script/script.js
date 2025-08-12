function scrollToSection(id) {
  const sekce = document.getElementById(id);
  if (sekce) {
    sekce.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn("Sekce '" + id + "' nebyla nalezena.");
  }
}

fetch("/novinky/novinky.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("novinky-list");
    data.forEach(item => {
      container.innerHTML += `
        <article class="novinka-box">
          <span class="badge novinka">Novinka</span>
          <h2><a href="${item.contentFile}">${item.title}</a></h2>
          <p><em>${item.date}</em> — Autor: ${item.author}</p>
        </article>
      `;
    });
  })
  .catch(err => {
    console.error("Chyba při načítání novinek:", err);
    const container = document.getElementById("novinky-list");
    container.innerHTML = "<p>Novinky se nepodařilo načíst, zkuste to prosím později.</p>";
  });

  document.addEventListener('DOMContentLoaded', () => {
  fetch('/about/about-extra.html')  // cesta k externímu souboru s tím HTML blokem
    .then(res => {
      if (!res.ok) throw new Error('Chyba při načítání about-extra.html');
      return res.text();
    })
    .then(html => {
      const container = document.createElement('section');
      container.classList.add('about-extra');
      container.innerHTML = html;
      document.querySelector('main').appendChild(container); // přidá to do main
    })
    .catch(err => console.error(err));
});

const hour = new Date().getHours();
  const body = document.body;

  // Časová podmínka: noc = krvavý měsíc
  let isBloodTime = hour >= 20 || hour < 5;

  // Fáze měsíce přes API
  fetch("https://api.farmsense.net/v1/moonphases/?d=" + Date.now())
    .then(response => response.json())
    .then(data => {
      const phase = data[0].Phase.toLowerCase();

      // Fáze, které spouští krvavý efekt
      const bloodPhases = [
        "new moon",
        "waning crescent",
        "third quarter",
        "waning gibbous"
      ];

      const isBloodPhase = bloodPhases.some(p => phase.includes(p));

      if (isBloodTime || isBloodPhase) {
        body.classList.add("bloodmoon");
      }
    })
    .catch(error => {
      console.warn("Moon phase API failed, fallback to time only.");
      if (isBloodTime) {
        body.classList.add("bloodmoon");
      }
    });
