// ========================
// QA Portfolio — Scripts
// ========================

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Navbar background on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll-reveal animation
const revealEls = document.querySelectorAll(
  ".section-header, .about-grid, .skill-card, .timeline-item, .project-card, .contact-card, .contact-form",
);
revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

revealEls.forEach((el) => observer.observe(el));

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple form submission handler (mailto fallback)
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const mailto = `mailto:popoolafarouk@gmail.com?subject=${encodeURIComponent(
    subject + " — from " + name,
  )}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">")}`;

  window.location.href = mailto;
  return false;
}
