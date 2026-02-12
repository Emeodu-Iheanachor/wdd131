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

});
