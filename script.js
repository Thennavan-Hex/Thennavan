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

// Text Animation
async function init() {
  const node = document.querySelector("#type-text");

  await sleep(1000);
  node.innerText = "";
  await node.type("Interests: ");

  while (true) {
    await node.type("Web Development!");
    await sleep(2000);
    await node.delete("Web Development!");
    await node.type("Mobile App Development!");
    await sleep(2000);
    await node.delete("Mobile App Development!");
    await node.type("Data Science!");
    await sleep(2000);
    await node.delete("Data Science!");
  }
}



// Source code 🚩

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }
  
  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()


//second animaition 
var secondAnimation = bodymovin.loadAnimation({
  container: document.getElementById('second-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets8.lottiefiles.com/packages/lf20_hijdc45w/data.json' // URL for the second animation
});