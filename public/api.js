// This script handles the communications between. the front end to the back end.
const API = {
  async getLastGame() {
    let res;
    try {
      res = await fetch("/api/games");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addRound(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/games/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createGame(data = {}) {
    const res = await fetch("/api/games", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    console.log(res);
    const json = await res.json();

    return json;
  },

  async getGamesInRange() {
    const res = await fetch(`/api/games/range`);
    const json = await res.json();

    return json;
  },
};
