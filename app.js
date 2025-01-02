const colors = ["Green", "Red", "rgba(133,122,200)", "#F15025","Aqua"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 - 3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  document.body.style.color = colors[randomNumber];
  document.getElementById("color").style.color = colors[randomNumber];
  color.textContent = colors[randomNumber];
  document.getElementById("btn").style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
