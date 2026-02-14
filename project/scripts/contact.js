// Contact form confirmation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const messageBox = document.getElementById("formConfirmation");
    messageBox.textContent = "Thank you! Your message has been sent successfully.";

    contactForm.reset();
    
  });
}



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