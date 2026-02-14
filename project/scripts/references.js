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


/* ==========================
     HERO IMAGE BOUNCE EFFECT
     ========================== */
  const heroSection = document.querySelector(".hero");
  if (heroSection) {

    // Only simulate bounce on desktop (mobile has native bounce)
    if (window.innerWidth >= 768) {
      heroSection.addEventListener("scroll", () => {
        const scrollTop = heroSection.scrollTop;
        const maxScroll = heroSection.scrollHeight - heroSection.clientHeight;

        if (scrollTop <= 0) {
          heroSection.style.transform = "translateY(5px)";
          setTimeout(() => heroSection.style.transform = "translateY(0)", 150);
        } else if (scrollTop >= maxScroll) {
          heroSection.style.transform = "translateY(-5px)";
          setTimeout(() => heroSection.style.transform = "translateY(0)", 150);
        }
      });
    }
  }

});
