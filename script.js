document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".page-section");
  const navImage = document.getElementById("navImage");
  const navName = document.querySelector(".nav-name");
  const mainImage = document.getElementById("mainImage");
  const navbar = document.getElementById("navbar");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");

      // Remove 'active' class from all links
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Hide all sections
      sections.forEach(section => {
        section.classList.remove("active-section");
        section.classList.add("hidden-section");
      });

      // Show the target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active-section");
        targetSection.classList.remove("hidden-section");
      }

      // Toggle navbar photo and name
      if (targetId !== "home") {
        navbar.classList.add("show-photo");
        if (mainImage) mainImage.style.display = "none";
      } else {
        navbar.classList.remove("show-photo");
        if (mainImage) mainImage.style.display = "block";
      }
    });
  });
});
