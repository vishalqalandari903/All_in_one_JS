const images = document.querySelectorAll("#images li img");
Array.from(images).forEach((image) => {
  image.setAttribute("draggable", "true");
});

document.querySelector("body").addEventListener("click", (e) => {
  // console.log(e);
  let clientX = e.pageX;
  let clientY = e.pageY;
  let element = document.createElement("div");
  element.className = "circle-effect";
  element.style.top = `${clientY}px`;
  element.style.left = `${clientX}px`;
  document.body.appendChild(element);
  let animationDuration =
    window.getComputedStyle(element).animationDuration.split("s")[0] * 1000;
  setTimeout(() => {
    element.remove();
  }, animationDuration);
});

// document.querySelector("#images").addEventListener(
//   "click",
//   (e) => {
//     console.log("clicked inside the ul");
//   },
//   false
// );

// document.querySelector("#owl").addEventListener(
//   "click",
//   (e) => {
//     console.log("clicked owl");
//   },
//   false
// );

// document.querySelector("#google").addEventListener(
//   "click",
//   (e) => {
//     e.preventDefault();
//   },
//   false
// );

// let ctrlKeyHeld = false;
// let zIndex = 2;
// Array.from(images).forEach((image) => {
//   image.addEventListener("drag", (e) => {
//     ctrlKeyHeld = e.ctrlKey;
//   });

//   image.addEventListener("dragend", (e) => {
//     if (ctrlKeyHeld) {
//       console.log("good");
//       let x = `${e.pageX}px`;
//       let y = `${e.pageY}px`;
//       image.style.position = "absolute";
//       image.style.left = x;
//       image.style.top = y;
//       image.style.transform = "translate(-50%, -50%)";
//       image.style.zIndex = zIndex;
//       zIndex++;
//     }
//   });
// });

// ? type, timestamp, defaultPrevented
// ? target, toElement, srcElement, currentTarget,
// ? clientX, clientY, screenX, screenY
// ? altkey, ctrlkey, shiftkey, keyCode

// attachEvent()
// jQuery - on

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false
);

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("owl clicked");
    e.stopPropagation();
  },
  false
);

document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log("google clicked");
    e.stopPropagation();
  },
  false
);

// document.querySelector('#images').addEventListener('click', function (e) {
//     console.log(e.target.tagName);
//     if (e.target.tagName === 'IMG') {
//         console.log(e.target.id);
//         let removeIt = e.target.parentNode
//         removeIt.remove()
//     }
// })

//removeIt.parentNode.removeChild(removeIt)

// console.log("two");
