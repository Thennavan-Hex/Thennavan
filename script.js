// Toggle the navigation menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// DOMContentLoaded event to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.querySelector('.honors-details-scrollable');

  // Function to duplicate items in the honors section
  function duplicateItems() {
    const items = Array.from(scrollContainer.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      scrollContainer.appendChild(clone);
    });
  }

  duplicateItems();

  let isScrolling = true;
  let scrollAmount = 0;

  // Function to start auto-scrolling
  const startAutoScroll = () => {
    if (isScrolling) {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    }
  };

  // Function to stop auto-scrolling on mouseover
  const stopAutoScroll = () => {
    isScrolling = false;
  };

  // Function to resume auto-scrolling on mouseout
  const resumeAutoScroll = () => {
    isScrolling = true;
  };

  // Event listeners to stop and resume auto-scrolling on hover
  scrollContainer.addEventListener('mouseover', stopAutoScroll);
  scrollContainer.addEventListener('mouseout', resumeAutoScroll);

  // Set interval for auto-scrolling
  setInterval(startAutoScroll, 20);

  // Ensure smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
