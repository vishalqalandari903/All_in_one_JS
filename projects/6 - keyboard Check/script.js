let keyPressed = document.querySelector("#keyboard_key");
let numberOfTimesKeyIsPressed = 1;
let keysPressedArray = [];

document.addEventListener("keydown", function (e) {
  keysPressedArray.push(e.key);

  increaseNumberOfTimesKeyIsPressed();

  showKeyPressedValue(e);
});

const showKeyPressedValue = (e) => {
  e.key !== " "
    ? (keyPressed.innerHTML = `${e.key} ${numberOfTimesKeyIsPressed}`)
    : (keyPressed.innerHTML = `space ${numberOfTimesKeyIsPressed}`);
};

const increaseNumberOfTimesKeyIsPressed = () => {
  if (keysPressedArray.length > 1) {
    if (
      keysPressedArray[keysPressedArray.length - 1] ==
      keysPressedArray[keysPressedArray.length - 2]
    ) {
      numberOfTimesKeyIsPressed++;
    } else {
      numberOfTimesKeyIsPressed = 1;
    }
  }
};
