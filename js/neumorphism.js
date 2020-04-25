let button = document.querySelector(".toggle");
let neu = document.querySelector(".neumorphism");
let neuBtn = document.querySelector(".neu");

button.addEventListener("click", () => {
  // neu.classList.remove("neumorphism");
  neu.classList.toggle("night-mode");
  neuBtn.classList.toggle("night-btn");
  button.classList.toggle("image");
  if (neu.classList.contains("night-mode")) {
    button.style.boxShadow = "none";
  } else {
    button.style.boxShadow =
      ".4em .4em .5em rgba(0, 0, 0, 0.212), -.4em -.4em .5em rgba(255, 255, 255, 0.8)";
  }
});
