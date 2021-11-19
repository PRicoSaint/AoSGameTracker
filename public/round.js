// This script file handles the logic behind the input of the Round to be added to the game. It then sends this information to back end, to be added to the database.
// const gameTypeSelect = document.querySelector("#type");
// const cardioForm = document.querySelector(".cardio-form");
const resistanceForm = document.querySelector(".resistance-form");
// const cardioNameInput = document.querySelector("#cardio-name");
// const nameInput = document.querySelector("#name");
const roundNumber = document.querySelector("#number");
const battleTactic = document.querySelector("#battletactic");
const heroicAction = document.querySelector("#heroicaction");
const durationInput = document.querySelector("#duration");
const victoryPoints = document.querySelector("#victorypoints");
const monsterSlain = document.querySelector("#monsterslain");
// const resistanceDurationInput = document.querySelector("#resistance-duration");
// const distanceInput = document.querySelector("#distance");
const completeButton = document.querySelector("button.complete");
const addButton = document.querySelector("button.add-another");
const toast = document.querySelector("#toast");
// const newgame = document.querySelector(".new-game")

// let gameType = null;
let shouldNavigateAway = false;

// If no game exists, a new one will be created.
async function initRound() {
  let game;

  if (location.search.split("=")[1] === undefined) {
    console.log("Line 24 " + location.search.split("=")[1]);
    game = await API.creategame()
    console.log("This is line 26 in" + game);
  }
  if (game) {
    location.search = "?id=" + game._id;
  }

}

initRound();

function handlegameTypeChange() {
    resistanceForm.classList.remove("d-none");
  validateInputs();
}
handlegameTypeChange();
function validateInputs() {
  let isValid = true;
  let begin = "start";

  if (begin) {

    if (roundNumber.value.trim() === "") {
      isValid = false;
    }

    if (battleTactic.value === "") {
      isValid = false;
    }

    if (heroicAction.value === "") {
      isValid = false;
    }

    if (durationInput.value.trim() === "") {
      isValid = false;
    }
  }
  }

  if (isValid) {
    completeButton.removeAttribute("disabled");
    addButton.removeAttribute("disabled");
  } else {
    completeButton.setAttribute("disabled", true);
    addButton.setAttribute("disabled", true);
  }

async function handleFormSubmit(event) {
  event.preventDefault();

  let gameData = {};
    gameData.number = Number(roundNumber.value.trim());
    gameData.battletactic = battleTactic.value.trim();
    gameData.heroicAction = heroicAction.value.trim();
    gameData.duration = Number(durationInput.value.trim());
    gameData.victorypoints = Number(victoryPoints.value.trim());
    gameData.monsterSlain = monsterSlain.value;


  await API.addRound(gameData);
  clearInputs();
  toast.classList.add("success");
}

function handleToastAnimationEnd() {
  toast.removeAttribute("class");
  if (shouldNavigateAway) {
    location.href = "/";
  }
}

function clearInputs() {
  battleTactic.value = "";
  durationInput.value = "";
  heroicAction.value = "";
  roundNumber.value = "";
  victoryPoints.value = "";
  monsterSlain.value = "";
}

// if (gameTypeSelect) {
//   gameTypeSelect.addEventListener("change", handlegameTypeChange);
// }
if (completeButton) {
  completeButton.addEventListener("click", function (event) {
    shouldNavigateAway = true;
    handleFormSubmit(event);
  });
}
if (addButton) {
  addButton.addEventListener("click", handleFormSubmit);
}
toast.addEventListener("animationend", handleToastAnimationEnd);

document
  .querySelectorAll("input")
  .forEach(element => element.addEventListener("input", validateInputs));
