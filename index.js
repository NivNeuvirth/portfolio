window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section"); // Select all sections
  const navLinks = document.querySelectorAll("nav a"); // Select all nav links

  let currentSection = "home"; // Default to 'home' when there's no other active section

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Account for navbar height
    const sectionHeight = section.offsetHeight;

    // If the scroll is within the bounds of a section
    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  // Update the active link in the navbar
  navLinks.forEach((link) => {
    link.classList.remove("active"); // Remove 'active' class from all links
    // Check if the current section matches the link's href
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active"); // Add 'active' class to the correct link
    }
  });
});
