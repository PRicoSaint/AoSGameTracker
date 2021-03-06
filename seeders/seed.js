// Use this js file to preseed data into the database to see as an example. Not required for general app usage.
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/aosgametracker', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const gameSeed = [
  {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    round: [
      {
        number: 1,
        battletactic: 'Ferocious Advance',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 2,
        battletactic: 'Broken Ranks',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 3,
        battletactic: 'Slay the Warlord',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 4,
        battletactic: 'Conquer',
        duration: 20,
        heroicaction: 'Their Finest Hour',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 5,
        battletactic: 'Savage Spearhead',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: false,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    round: [
      {
        number: 1,
        battletactic: 'Ferocious Advance',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 2,
        battletactic: 'Broken Ranks',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 3,
        battletactic: 'Slay the Warlord',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 4,
        battletactic: 'Conquer',
        duration: 20,
        heroicaction: 'Their Finest Hour',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 5,
        battletactic: 'Savage Spearhead',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: false,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    round: [
      {
        number: 1,
        battletactic: 'Ferocious Advance',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 2,
        battletactic: 'Broken Ranks',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 3,
        battletactic: 'Slay the Warlord',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 4,
        battletactic: 'Conquer',
        duration: 20,
        heroicaction: 'Their Finest Hour',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 5,
        battletactic: 'Savage Spearhead',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: false,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 6)),
    round: [
      {
        number: 1,
        battletactic: 'Ferocious Advance',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 2,
        battletactic: 'Broken Ranks',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 3,
        battletactic: 'Slay the Warlord',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 4,
        battletactic: 'Conquer',
        duration: 20,
        heroicaction: 'Their Finest Hour',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 5,
        battletactic: 'Savage Spearhead',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: false,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    round: [
      {
        number: 1,
        battletactic: 'Ferocious Advance',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 2,
        battletactic: 'Broken Ranks',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 3,
        battletactic: 'Slay the Warlord',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 4,
        battletactic: 'Conquer',
        duration: 20,
        heroicaction: 'Their Finest Hour',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 5,
        battletactic: 'Savage Spearhead',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: false,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    round: [
      {
        number: 1,
        battletactic: 'Ferocious Advance',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 2,
        battletactic: 'Broken Ranks',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 3,
        battletactic: 'Slay the Warlord',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 4,
        battletactic: 'Conquer',
        duration: 20,
        heroicaction: 'Their Finest Hour',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 5,
        battletactic: 'Savage Spearhead',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: false,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    round: [
      {
        number: 1,
        battletactic: 'Ferocious Advance',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 2,
        battletactic: 'Broken Ranks',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 3,
        battletactic: 'Slay the Warlord',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 4,
        battletactic: 'Conquer',
        duration: 20,
        heroicaction: 'Their Finest Hour',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 5,
        battletactic: 'Savage Spearhead',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: false,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    round: [
      {
        number: 1,
        battletactic: 'Ferocious Advance',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 2,
        battletactic: 'Broken Ranks',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 3,
        battletactic: 'Slay the Warlord',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 4,
        battletactic: 'Conquer',
        duration: 20,
        heroicaction: 'Their Finest Hour',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 5,
        battletactic: 'Savage Spearhead',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: false,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    round: [
      {
        number: 1,
        battletactic: 'Ferocious Advance',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 2,
        battletactic: 'Broken Ranks',
        duration: 20,
        heroicaction: 'Heroic Leadership',
        victorypoints: 5,
        monsterslain: false,
      },
      {
        number: 3,
        battletactic: 'Slay the Warlord',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 4,
        battletactic: 'Conquer',
        duration: 20,
        heroicaction: 'Their Finest Hour',
        victorypoints: 5,
        monsterslain: true,
      },
      {
        number: 5,
        battletactic: 'Savage Spearhead',
        duration: 20,
        heroicaction: 'Heroic Recovery',
        victorypoints: 5,
        monsterslain: false,
      },
    ],
  },
];

db.deleteMany({})
  .then(() => db.collection.insertMany(gameSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
