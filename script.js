function handleSmallScreens() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector(".navbar-menu");

  navbarToggler.addEventListener("click", () => {
    if (!navbarMenu.classList.contains("active")) {
      navbarMenu.classList.add("active");
      // Scroll down when mobile menu is active
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      navbarMenu.classList.remove("active");
    }
  });
}

handleSmallScreens();
// Toggle the light and dark theme
function toggleTheme() {
  const body = document.querySelector("body");
  const navbar = document.querySelector(".navbar");
  const themeToggleButton = document.getElementById("theme-toggle-btn");

  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
  navbar.classList.toggle("light-mode");
  navbar.classList.toggle("dark-mode");
  themeToggleButton.classList.toggle("active");
}

// Add event listener to the theme toggle button
const themeToggleButton = document.getElementById("theme-toggle-btn");
themeToggleButton.addEventListener("click", toggleTheme);

// Lottie Animation
const animationContainer = document.getElementById("lottie-animation");
const animationDataUrl =
  "https://assets3.lottiefiles.com/packages/lf20_gnb0jsok.json";

lottie.loadAnimation({
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: animationDataUrl,
});
