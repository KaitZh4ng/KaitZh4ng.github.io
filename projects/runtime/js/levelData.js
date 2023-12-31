var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          {type: "sawblade", x: 950, y: groundY - 50},
          {type: "sawblade", x: 550, y: groundY - 120},
          {type: "sawblade", x: 1240, y: groundY},
          {type: "reward", x: 1200, y: 90},
          {type: "reward", x: 800, y: 90},
          {type: "reward", x: 1600, y: 90},
          {type: "enemy", x: 430, y: 60},
          {type: "enemy", x: 1300, y: 60},
          {type: "enemy", x: 900, y: 60},
          {type: "enemy", x: 680, y: 60},
          {type: "marker", x: 1400, y: 30}

        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          {type: "enemy", x: 400, y: groundY },
          {type: "sawblade", x: 600, y: groundY },
          {type: "sawblade", x: 900, y: groundY },
        ],
      },
      {
        name: "idk",
        number: 3,
        speed: -3,
        gameItems: [
          {type: "reward", x: 2000, y: groundY - 60},
          {
            type: "enemy", 
            x: 1000, 
            y: groundY - 60
          },
          {
            type: "sawblade", 
            x: 1500, 
            y: groundY - 60
          },
          {
            type: "sawblade", 
            x: 2000, 
            y: groundY - 60
          },

        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
