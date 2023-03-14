var rangeNumber = document.querySelector(".upperInput");
var maxRangeNumberSet = document.querySelector(".changeNumber");
var points = document.querySelector(".points");
var highScore = document.querySelector(".highScore");
var correctNumber = document.querySelector(".correctNumber");
var yourNumber = document.querySelector(".yourNumber");
var tryAgain = document.querySelector(".tryAgain");
var inputUser = document.querySelector(".inputUser");
var check = document.querySelector(".check");
var resultWin = document.querySelector(".resultWin");
var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modalButton");
var close = document.querySelector(".close");
const body = document.querySelector("body");

body.addEventListener("keydown", (e) => {
  console.log(e.key, "==>>yeh wala key dabai hai");
  if (e.key === "Escape") {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  }
});

modalButton.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});

close.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});

rangeNumber.addEventListener("click", () => {
  console.log(rangeNumber.value);
  rangeNumber.value = "";
});

rangeNumber.addEventListener("input", () => {
  console.log(rangeNumber.value);
  maxRangeNumberSet.innerHTML = rangeNumber.value;
});

inputUser.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    resultWin.classList.add("hidden");
    if (points.innerHTML > 0) {
      var generateNumber =
        Math.round(Math.random() * (rangeNumber.value - 1)) + 1;
      // console.log(generateNumber)
      if (Number(rangeNumber.value) >= Number(inputUser.value)) {
        if (generateNumber == inputUser.value) {
          resultWin.classList.remove("hidden");
          correctNumber.innerHTML = generateNumber;
          yourNumber.innerHTML = inputUser.value;
          points.textContent = +points.textContent + 1;
          if (highScore.textContent < points.textContent) {
            highScore.textContent = points.textContent;
          }
        } else {
          points.textContent = +points.textContent - 1;
          correctNumber.innerHTML = generateNumber;
          yourNumber.innerHTML = inputUser.value;
        }
      } else {
        alert("input number is not greater than range number ");
      }
    } else {
      alert("Gameover please try again");
    }
  }
});

check.addEventListener("click", () => {
  resultWin.classList.add("hidden");
  if (points.innerHTML > 0) {
    var generateNumber =
      Math.round(Math.random() * (rangeNumber.value - 1)) + 1;
    // console.log(generateNumber)
    if (Number(rangeNumber.value) >= Number(inputUser.value)) {
      if (generateNumber == inputUser.value) {
        resultWin.classList.remove("hidden");
        correctNumber.innerHTML = generateNumber;
        yourNumber.innerHTML = inputUser.value;
        points.textContent = +points.textContent + 1;
        if (highScore.textContent < points.textContent) {
          highScore.textContent = points.textContent;
        }
      } else {
        points.textContent = +points.textContent - 1;
        correctNumber.innerHTML = generateNumber;
        yourNumber.innerHTML = inputUser.value;
      }
    } else {
      alert("input number is not greater than range number ");
    }
  } else {
    alert("Gameover please try again");
  }
});
tryAgain.addEventListener("click", () => {
  rangeNumber.value = "";
  inputUser.value = "";
  points.innerHTML = 20;
  highScore.innerHTML = 0;
  maxRangeNumberSet.innerHTML = "?";
  correctNumber.innerHTML = "?";
  yourNumber.innerHTML = "?";
});
