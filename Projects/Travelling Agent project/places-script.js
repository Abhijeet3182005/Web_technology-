// Data for places
const placesData = {
  India: [
    {
      name: "Taj Mahal",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      link: "https://www.google.com/maps/place/Taj+Mahal"
    },
    {
      name: "Goa Beach",
      image: "https://images.unsplash.com/photo-1587922546307-776227941871",
      link: "https://www.google.com/maps/place/Goa"
    }
  ],

  Italy: [
    {
      name: "Colosseum",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
      link: "https://www.google.com/maps/place/Colosseum"
    },
    {
      name: "Venice",
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
      link: "https://www.google.com/maps/place/Venice"
    }
  ],

  France: [
    {
      name: "Eiffel Tower",
      image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e",
      link: "https://www.google.com/maps/place/Eiffel+Tower"
    }
  ],

  Japan: [
    {
      name: "Mount Fuji",
      image: "https://images.unsplash.com/photo-1505069446780-4ef442b5207f",
      link: "https://www.google.com/maps/place/Mount+Fuji"
    }
  ]
};

// Load places
window.onload = () => {
  let country = localStorage.getItem("selectedCountry");

  document.getElementById("placeTitle").innerText = "Top Places in " + country;

  let container = document.getElementById("places");

  let places = placesData[country];

  places.forEach((place, index) => {
  let div = document.createElement("div");
  div.className = "place-card";

  // Animation
  div.style.animation = "fadeUp 0.6s ease forwards";
  div.style.animationDelay = `${index * 0.2}s`;

  div.innerHTML = `
    <img src="${place.image}">
    <h2>${place.name}</h2>
  `;

  div.onclick = () => {
    window.open(place.link, "_blank");
  };

  container.appendChild(div);
});
};