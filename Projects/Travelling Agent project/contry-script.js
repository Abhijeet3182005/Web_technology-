// Country Data
const countryData = [
  {
    name: "India",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
  },
  {
    name: "Italy",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  },
  {
    name: "France",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
  },
  {
    name: "Japan",
    image: "https://images.unsplash.com/photo-1505069446780-4ef442b5207f"
  }
];

// Load page safely
window.addEventListener("load", () => {
  let name = localStorage.getItem("username") || "Traveler";

  let title = document.getElementById("title");
  if (title) {
    title.innerText = `Hello ${name}, Choose Your Destination 🌍`;
  }

  loadCountries();
});

function loadCountries() {
  let container = document.getElementById("countries");

  // Safety check
  if (!container) return;

  countryData.forEach((country, index) => {
    let div = document.createElement("div");
    div.className = "country-card";

    // 🎬 Animation
    div.style.animation = "fadeUp 0.6s ease forwards";
    div.style.animationDelay = `${index * 0.2}s`;

    div.innerHTML = `
      <img src="${country.image}">
      <h2>${country.name}</h2>
    `;

    div.onclick = () => selectCountry(country.name);

    container.appendChild(div);
  });
}

// When user clicks country
function selectCountry(name) {
  localStorage.setItem("selectedCountry", name);
  window.location.href = "places.html";
}