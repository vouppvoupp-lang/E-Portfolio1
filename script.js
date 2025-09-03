document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-section");
  toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const section = document.querySelector(btn.dataset.target);
      section.classList.toggle("hidden");
    });
  });
});