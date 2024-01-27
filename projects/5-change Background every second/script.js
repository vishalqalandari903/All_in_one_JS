function generateBodyColor() {
  let hexValues = "1234567890ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    number = Math.floor(Math.random() * hexValues.length);
    color += hexValues[number];
  }
  console.log(color);
  document.body.style.backgroundColor = color;
}

let colorChangeInterval;
generateBodyColor();

document.querySelector("#start").addEventListener("click", function () {
  if (!colorChangeInterval) {
    colorChangeInterval = setInterval(() => {
      generateBodyColor();
    }, 1000);
  }
});
document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(colorChangeInterval);
  colorChangeInterval = null;
});
