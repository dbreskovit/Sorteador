const ENTRANTS = ["Administração", "Agropecuária", "Alimentos", "Informática"];

const rollEl = document.querySelector(".roll");
const rollAgainEl = document.querySelector(".roll-again");
const namesEl = document.querySelector(".names");
const winnerEl = document.querySelector(".winner");
var user;

function randomName() {
  const rand = Math.floor(Math.random() * ENTRANTS.length);
  const name = ENTRANTS[rand];
  namesEl.innerText = name;
}

function rollClick() {
  do {
    user = prompt("Informe seu nome:");
  } while (user == null || user == "");

  rollEl.classList.add("hide");
  rollAgainEl.classList.add("hide");
  winnerEl.classList.add("hide");
  namesEl.classList.remove("hide");

  setDeceleratingTimeout(randomName, 10, 30);

  setTimeout(() => {
    namesEl.classList.add("hide");
    winnerEl.classList.remove("hide");
    rollAgainEl.classList.remove("hide");

    const winner = "Informática";
    winnerEl.innerText = winner;
    winnerEl.innerHTML = `<span>${user}, seu curso é...</span><br>${winner}`;
  }, 4000);
}

function setDeceleratingTimeout(callback, factor, times) {
  const internalCallback = ((t, counter) => {
    return () => {
      if (--t > 0) {
        setTimeout(internalCallback, ++counter * factor);
        callback();
      }
    };
  })(times, 0);

  setTimeout(internalCallback, factor);
}

function resetPage() {
  document.location.reload(true);
}
