// Sets up and defines requirements
const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const Game = require("./models");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/aosgametracker', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// Routes for all the pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/round", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/round.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});
// Route to create new Game if new Game is selected. This allows round to be added.
app.post("/api/games", (req, res) => {
    Game.create({})
        .then(Game => {
            console.log(Game);
            res.json(Game)
        })
        .catch(({ message }) => {
            console.log(message);
            res.json(message);
        });
});
// Obtains the previous Games, specifically the last one to be used and displayed on tracker page.
app.get("/api/games", (req, res) => {
    Game.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$round.duration" },
            }
        }], (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });
});

// Route that obtains information regarding last 7 Games and their respective round. The data of current duration and total weight is then displayed as two different graphs.
app.get("/api/games/range", (req, res) => {
    Game.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$round.duration" },
            }
        }]).sort({ _id: -1 }).limit(7)
        .then(lastSevenGames => {
            console.log(lastSevenGames);
            res.json(lastSevenGames)
        })
        .catch(({ message }) => {
            console.log(message);
            res.json(message);
        });
});
// This is the route to add an round to an existing Game
app.put("/api/games/:id", (req, res) => {
    Game.updateOne(
        {
            _id: req.params.id
        },
        {
            $push:
            {
                round: {
                    number: req.body.number,
                    battletactic: req.body.battletactic,
                    duration: req.body.duration,
                    heroicaction: req.body.heroicaction,
                    victorypoints: req.body.victorypoints,
                    monsterslain: req.body.monsterslain,
                },
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});
// Server set up to listen for queries from front end.
app.listen(process.env.PORT || 3000, () => {
    console.log("App running on port 3000!");
});