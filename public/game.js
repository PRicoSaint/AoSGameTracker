// Script for tracker page. Last workout is chosen and data from it is added and displayed on screen.
async function initGame() {
  const lastGame = await API.getLastGame();
  console.log("Last game:", lastGame);
  if (lastGame) {
    document
      .querySelector("a[href='/round?']")
      .setAttribute("href", `/round?id=${lastGame._id}`);

    const gameSummary = {
      date: formatDate(lastGame.day),
      totalDuration: lastGame.totalDuration,
      numRounds: lastGame.round.length,
      ...tallyRounds(lastGame.round)
    };

    rendergameSummary(gameSummary);
  } else {
    renderNoGameText()
  }
}

function tallyRounds(round) {
  const tallied = round.reduce((acc, curr) => {
    acc.victoryPoints = (acc.victoryPoints || 0) + curr.victorypoints;
    // acc.totalSets = (acc.totalSets || 0) + curr.sets;
    //   acc.totalReps = (acc.totalReps || 0) + curr.reps;
    return acc;
  }, {});
  return tallied;
}

function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return new Date(date).toLocaleDateString(options);
}

function rendergameSummary(summary) {
  const container = document.querySelector(".workout-stats");

  const workoutKeyMap = {
    date: "Date",
    totalDuration: "Total Game Duration",
    numRounds: "Number of Rounds played",
    victoryPoints: "Total Victory Points Scored",
    // totalSets: "Total Sets Performed",
    // totalReps: "Total Reps Performed",
    // totalDistance: "Total Distance Covered"
  };

  Object.keys(summary).forEach(key => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = workoutKeyMap[key];
    const textNode = document.createTextNode(`: ${summary[key]}`);

    p.appendChild(strong);
    p.appendChild(textNode);

    container.appendChild(p);
  });
}
// If no previous workout exists (empty database), this will display.
function renderNoGameText() {
  const container = document.querySelector(".workout-stats");
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = "You have not registered a game yet!"

  p.appendChild(strong);
  container.appendChild(p);
}

initGame();
