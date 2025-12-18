/* Resume download*/
document.querySelector('.resume-btn').addEventListener('click', () => {
    window.location.href = 'resume.pdf';
});
const pills = document.querySelectorAll('.lang-pill');

pills.forEach(pill => {
    pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
    });
});
/*Experience section ready*/
console.log("Experience section added successfully");

/*GLOBAL PAGE ANIMATION*/


document.addEventListener("DOMContentLoaded", () => {

  /*Select all main blocks & sections*/
  const animatedElements = document.querySelectorAll(
    `
    section,
    .container,
    .row,
    .col,
    .hero-section,
    .about-section,
    .experience-section,
    .edu-skill-section,
    .skills-section,
    .projects-section,
    .contact-section,
    .project-card,
    .skill-card,
    .exp-item
    `
  );

  /*Initial hidden state (inline style – CSS untouched)*/
  animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedElements.forEach(el => observer.observe(el));

});
const staggerCards = document.querySelectorAll(
  ".skill-card, .project-card, .exp-item"
);

staggerCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.12}s`;
});
const heroTexts = document.querySelectorAll(
  ".text-area h1, .text-area h2, .hero-text"
);

heroTexts.forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = `all 0.9s ease ${i * 0.2}s`;

  setTimeout(() => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, 300);
});
const navbar = document.querySelector(".navbar");

if (navbar) {
  navbar.style.transform = "translateY(-20px)";
  navbar.style.opacity = "0";
  navbar.style.transition = "all 0.6s ease";

  setTimeout(() => {
    navbar.style.transform = "translateY(0)";
    navbar.style.opacity = "1";
  }, 150);
}
const headings = document.querySelectorAll(
  ".same-heading, .section-title, .exp-head h2, .edu-head h2"
);

headings.forEach(h => {
  h.style.opacity = "0";
  h.style.transform = "scale(0.96)";
  h.style.transition = "all 0.6s ease";

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        h.style.opacity = "1";
        h.style.transform = "scale(1)";
        obs.unobserve(h);
      }
    });
  });

  obs.observe(h);
});
