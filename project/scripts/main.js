// ===============================
// DATA (Objects + Array)
// ===============================

const attractions = [
  {
    name: "Lekki Conservation Centre",
    location: "Lekki",
    rating: 5
  },
  {
    name: "Nike Art Gallery",
    location: "Lekki",
    rating: 4
  },
  {
    name: "Tarkwa Bay Beach",
    location: "Lagos Island",
    rating: 4
  }
];


// ===============================
// FUNCTIONS
// ===============================

// Function 1: Display Attractions
function displayAttractions() {
  const container = document.querySelector("#attractionsContainer");
  container.innerHTML = "";

  attractions.forEach(attraction => {
    container.innerHTML += `
      <div class="card">
        <h3>${attraction.name}</h3>
        <p>Location: ${attraction.location}</p>
        <p>Rating: ${attraction.rating} ⭐</p>
        <button class="saveBtn" data-name="${attraction.name}">
          Save to Favorites
        </button>
      </div>
    `;
  });

  addSaveEventListeners();
}


// Function 2: Save Favorite to localStorage
function saveFavorite(name) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.includes(name)) {
    favorites.push(name);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${name} has been added to your favorites!`);
  } else {
    alert(`${name} is already in your favorites.`);
  }
}


// Function 3: Add Event Listeners to Save Buttons
function addSaveEventListeners() {
  const buttons = document.querySelectorAll(".saveBtn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const attractionName = button.dataset.name;
      saveFavorite(attractionName);
    });
  });
}


// Function 4: Handle Review Form Submission
function handleReviewSubmit(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const place = document.querySelector("#place").value;
  const rating = document.querySelector("#rating").value;

  const review = {
    name,
    place,
    rating
  };

  localStorage.setItem("latestReview", JSON.stringify(review));

  let message = "";

  // Conditional branching
  if (rating >= 4) {
    message = `Thank you ${name}! We're glad you loved ${place}.`;
  } else if (rating == 3) {
    message = `Thank you ${name}! ${place} seems decent.`;
  } else {
    message = `Thank you ${name}. We appreciate your honest feedback about ${place}.`;
  }

  document.querySelector("#reviewMessage").innerHTML = `
    <p>${message}</p>
  `;

  document.querySelector("#reviewForm").reset();
}


// Function 5: Mobile Menu Toggle
function toggleMenu() {
  const navMenu = document.querySelector("#navMenu");
  navMenu.classList.toggle("show");
}


// ===============================
// EVENT LISTENERS
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  displayAttractions();

  document
    .querySelector("#reviewForm")
    .addEventListener("submit", handleReviewSubmit);

  document
    .querySelector("#menuBtn")
    .addEventListener("click", toggleMenu);

  document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menuBtn");
  menuBtn.addEventListener("click", () => {
    document.querySelector("#navMenu").classList.toggle("show");
  });
});  


});