// Initial page script that will render the information for the last game if it exists, otherwise will render empty without a continue game button.
init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const game = await API.getLastGame();
    if (game) {
      location.search = "?id=" + game._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

