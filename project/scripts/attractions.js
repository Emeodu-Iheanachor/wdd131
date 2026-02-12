// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // Mobile Navigation Toggle
  // ==========================
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    // Accessibility: update aria-expanded
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
  });

  // Close menu when a link is clicked (for mobile UX)
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    // Change hamburger to X
    hamburger.textContent = isOpen ? "✖" : "☰";

    // Accessibility improvement
    hamburger.setAttribute("aria-expanded", isOpen);
  });

});


  // ==========================
  // Dynamic Footer Year
  // ==========================
  const footer = document.querySelector("footer p");
  const currentYear = new Date().getFullYear();
  
  if (footer) {
    footer.innerHTML = `&copy; ${currentYear} Lagos City Guide | Emeodu R. C. Iheanachor`;
  }

});