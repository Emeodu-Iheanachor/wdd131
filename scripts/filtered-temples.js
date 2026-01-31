// ===============================
// Footer Dates
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ===============================
// Hamburger Menu
// ===============================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  
});

// ===============================
// REQUIRED Temple Array (7 + 3 Added)
// ===============================
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // ======== 3 STUDENT ADDED (VALID URLs) ========
 
 {
  templeName: "Gilbert Arizona",
  location: "Gilbert, Arizona, United States",
  dedicated: "2018, March, 19",
  area: 45000,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
},
{
  templeName: "Antofagasta Chile",
  location: "Antofagasta, Chile",
  dedicated: "2019, March, 10",
  area: 42000,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-60193-main.jpg"
},

{
  templeName: "Bengaluru India",
  location: "Bengaluru, India",
  dedicated: "2019, March, 10",
  area: 42000,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/bengaluru-india-temple/bengaluru-india-temple-7886-main.jpg"
}
];

// ===============================
// Create & Display Temple Cards
// ===============================
const container = document.getElementById("temple-cards");

function displayTemples(templeList) {
  container.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    container.appendChild(card);
  });
}

// Initial load
displayTemples(temples);

// ===============================
// Filters (RUBRIC REQUIRED)
// ===============================
document.getElementById("home").addEventListener("click", () => {
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
  const filtered = temples.filter(t => {
    const year = parseInt(t.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(filtered);
});

document.getElementById("new").addEventListener("click", () => {
  const filtered = temples.filter(t => {
    const year = parseInt(t.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(filtered);
});

document.getElementById("large").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area < 10000));
});

hamburger.addEventListener("click", () => {
  // Toggle icon
  hamburger.textContent =
    navMenu.classList.contains("show") ? "✖" : "☰";
});