document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;

        if (el.classList.contains("fade-slide-left")) {
          el.style.animation = "fadeSlideLeft 1s forwards ease";
        } else if (el.classList.contains("fade-slide-right")) {
          el.style.animation = "fadeSlideRight 1s forwards ease";
        } else if (el.classList.contains("stagger-fade")) {
          const items = el.querySelectorAll("li");
          items.forEach((item, idx) => {
            item.style.animation = `fadeSlideUp 0.6s forwards ease`;
            item.style.animationDelay = `${idx * 0.2}s`;
          });
        } else {
          // Default fadeSlideUp animation
          el.style.animation = "fadeSlideUp 1s forwards ease";
        }

        // Add visible class for existing styles
        el.classList.add("visible");
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.1,
  });

  sections.forEach(section => observer.observe(section));
});
