const pianoKeys = document.querySelectorAll(".key");

// Log events flag
const logEvents = false;

// Touch Point cache
const tpCache = [];

function playSound(newUrl) {
  new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? "0" + (i + 1) : i + 1;
  const newUrl = "24-piano-keys/key-" + number + ".mp3";
  pianoKey.addEventListener("touchstart", function (e) {
    e.preventDefault();
    e.target.classList.add("keyOrange");
    playSound(newUrl);
  });
  pianoKey.addEventListener("touchend", function (e) {
    e.preventDefault();
    e.target.classList.remove("keyOrange");
  });
});
