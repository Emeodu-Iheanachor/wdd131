document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     MOBILE NAVIGATION
     ========================== */

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {

    function setDesktopMode() {
      if (window.innerWidth >= 768) {
        navMenu.classList.add("open");        // always visible
        menuBtn.style.display = "none";       // hide hamburger
      } else {
        navMenu.classList.remove("open");     // hidden by default
        menuBtn.style.display = "block";
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
      }
    }

    // Run on page load
    setDesktopMode();

    // Run on screen resize
    window.addEventListener("resize", setDesktopMode);

    // Toggle mobile menu
    menuBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuBtn.textContent = isOpen ? "✖" : "☰";
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when a link is clicked (mobile)
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          navMenu.classList.remove("open");
          menuBtn.textContent = "☰";
          menuBtn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }


  /* ==========================
     CONTACT FORM CONFIRMATION
     ========================== */

  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("formConfirmation");

  if (form && confirmation) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      confirmation.textContent =
        "Thank you! Your message has been sent successfully. We will respond within 24–48 hours.";

      confirmation.classList.add("show");

      form.reset();
      confirmation.scrollIntoView({ behavior: "smooth" });
    });
  }

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



