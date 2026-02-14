const attractions = [
  { name: "Lekki Conservation Centre", location: "Lekki", rating: 5 },
  { name: "Nike Art Gallery", location: "Lekki", rating: 4 },
  { name: "Tarkwa Bay Beach", location: "Lagos Island", rating: 4 }
];

function displayAttractions() {
  const container = document.querySelector("#attractionsContainer");
  container.innerHTML = "";

  attractions.forEach(place => {
    container.innerHTML += `
      <div class="card">
        <h3>${place.name}</h3>
        <p>Location: ${place.location}</p>
        <p>Rating: ${place.rating} ⭐</p>
        <button class="saveBtn" data-name="${place.name}">
          Save to Favorites
        </button>
      </div>
    `;
  });

  addSaveListeners();
}

function addSaveListeners() {
  const buttons = document.querySelectorAll(".saveBtn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      saveFavorite(name);
    });
  });
}

function saveFavorite(name) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.includes(name)) {
    favorites.push(name);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${name} added to favorites!`);
  } else {
    alert(`${name} is already saved.`);
  }
}

function handleReview(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const place = document.querySelector("#place").value;
  const rating = document.querySelector("#rating").value;

  const review = { name, place, rating };
  localStorage.setItem("latestReview", JSON.stringify(review));

  let message = "";

  if (rating >= 4) {
    message = `Thank you ${name}! You highly recommend ${place}.`;
  } else if (rating == 3) {
    message = `Thank you ${name}. ${place} seems average.`;
  } else {
    message = `Thank you ${name} for your honest feedback about ${place}.`;
  }

  document.querySelector("#reviewMessage").innerHTML = `
    <p>${message}</p>
  `;

  document.querySelector("#reviewForm").reset();
}

function toggleMenu() {
  document.querySelector("#navMenu").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  displayAttractions();
  document.querySelector("#reviewForm").addEventListener("submit", handleReview);
  document.querySelector("#menuBtn").addEventListener("click", toggleMenu);

  
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

