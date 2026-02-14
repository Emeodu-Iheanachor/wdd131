document.addEventListener("DOMContentLoaded", () => {

  

  /* ===== Dynamic Food Cards ===== */
  const foodContainer = document.querySelector("#foodContainer");

  if (foodContainer) {

    const foods = [
      {
        name: "Jollof Rice",
        image: "images/jollof.jpg",
        alt: "Plate of Nigerian jollof rice",
        description: "A flavorful rice dish cooked with tomatoes, peppers, and spices. It is one of Nigeria’s most beloved meals."
      },
      {
        name: "Suya",
        image: "images/suya.jpg",
        alt: "Grilled suya meat skewers",
        description: "Spicy grilled meat skewers sold by street vendors, especially popular in the evenings."
      },
      {
        name: "Seafood Dishes",
        image: "images/seafood.jpg",
        alt: "Fresh seafood dish served in Lagos restaurant",
        description: "With its coastal location, Lagos offers fresh seafood including fish, prawns, and crab dishes."
      }
    ];

    foods.forEach(food => {
      const card = document.createElement("article");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${food.image}" alt="${food.alt}" loading="lazy">
        <h3>${food.name}</h3>
        <p>${food.description}</p>
        <button>Save to Favorites</button>
      `;

      const button = card.querySelector("button");
      button.addEventListener("click", () => {
        let favorites = JSON.parse(localStorage.getItem("foodFavorites")) || [];
        favorites.push(food.name);
        localStorage.setItem("foodFavorites", JSON.stringify(favorites));
        alert(`${food.name} added to favorites!`);
      });

      foodContainer.appendChild(card);
    });
  }

});





document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.querySelector("#menuBtn");
  const navMenu = document.querySelector("#navMenu");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

});

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  // Set initial state
  menuBtn.textContent = "☰";
  menuBtn.setAttribute("aria-expanded", "false");

  menuBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    // Change icon
    menuBtn.textContent = isOpen ? "✖" : "☰";

    // Accessibility
    menuBtn.setAttribute("aria-expanded", isOpen);
  });



const footer = document.querySelector('footer');
const paragraphs = Array.from(footer.querySelectorAll('p'));

// Keep first paragraph (copyright)
const copyright = paragraphs.shift();

// Collect all remaining content
const links = paragraphs.map(p => p.innerHTML.trim());

// Create one new paragraph with all links separated by " | "
const newLinksP = document.createElement('p');
newLinksP.innerHTML = links.join(' | ');

// Clear footer and append
footer.innerHTML = '';
footer.appendChild(copyright);
footer.appendChild(newLinksP);


});
