// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", () => {
    const isOpen = navMenu.style.display === "flex";

    // Toggle menu
    navMenu.style.display = isOpen ? "none" : "flex";

    // Change hamburger to X
    hamburger.textContent = isOpen ? "☰" : "✖";
});