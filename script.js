const yearTarget = document.getElementById("year");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll(".reveal-on-scroll");

revealItems.forEach((item) => item.classList.add("is-visible"));

if ("IntersectionObserver" in window) {
  revealItems.forEach((item) => item.classList.remove("is-visible"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -24px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}
