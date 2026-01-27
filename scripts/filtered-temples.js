// Temple array with 3+ additional temples
const temples = [
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "images/salt-lake-temple.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "images/accra-ghana-temple.jpg"
    },
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "images/rome-italy-temple.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Paris, France",
        dedicated: "1989, May, 21",
        area: 21000,
        imageUrl: "images/paris-france-temple.jpg"
    },
    {
        templeName: "Mexico City Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city-temple.jpg"
    },
    {
        templeName: "Draper Utah Temple",
        location: "Draper, Utah, United States",
        dedicated: "2009, March, 20",
        area: 75000,
        imageUrl: "images/draper-utah-temple.jpg"
    },
    {
        templeName: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52000,
        imageUrl: "images/tokyo-japan-temple.jpg"
    },
    {
        templeName: "Johannesburg South Africa Temple",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19000,
        imageUrl: "images/jhb-sa-temple.jpg"
    }
];

// Function to display temples
const cardsContainer = document.querySelector("#temple-cards");

function displayTemples(list) {
    cardsContainer.innerHTML = "";

    list.forEach(temple => {
        const card = document.createElement("figure");
        card.classList.add("temple-card");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        card.appendChild(img);

        const caption = document.createElement("figcaption");
        caption.innerHTML = `<strong>${temple.templeName}</strong><br>
                             Location: ${temple.location}<br>
                             Dedicated: ${temple.dedicated}<br>
                             Area: ${temple.area.toLocaleString()} sq ft`;
        card.appendChild(caption);

        cardsContainer.appendChild(card);
    });
}

// Initial load
displayTemples(temples);

// Filter functions
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));
document.querySelector("#old").addEventListener("click", () => {
    const filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
    displayTemples(filtered);
});
document.querySelector("#new").addEventListener("click", () => {
    const filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
    displayTemples(filtered);
});
document.querySelector("#large").addEventListener("click", () => {
    const filtered = temples.filter(t => t.area > 90000);
    displayTemples(filtered);
});
document.querySelector("#small").addEventListener("click", () => {
    const filtered = temples.filter(t => t.area < 10000);
    displayTemples(filtered);
});

// Footer year and last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
hamburger.addEventListener("click", () => {
    const isOpen = navMenu.style.display === "block";
    navMenu.style.display = isOpen ? "none" : "block";
});