var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25;
      obstacleImage.y = -25;
    }
    // createSawBlade(1240, 500)
    // createSawBlade(550, 480)
    // createSawBlade(950, 380)
    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = groundY - y;
      game.addGameItem(enemy);
      enemy.velocityX = -3;
      enemy.rotationalVelocity = 9
      enemy.onPlayerCollision = function () { game.changeIntegrity(-10) }
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.shrink();
      }

    }
    // createEnemy(400, 50);
    // createEnemy(800, 50);
    // createEnemy(1200, 50);

    function createReward(x, y) {
      var reward = game.createGameItem("reward", 25);
      var blueCircle = draw.circle(25, "blue", 12, "blue")
      blueCircle.x = 0;
      blueCircle.y = 0;
      reward.addChild(blueCircle);
      reward.x = x;
      reward.y = groundY - y;
      game.addGameItem(reward);
      reward.velocityX = -3;
      reward.rotationalVelocity = 0
      reward.onPlayerCollision = function () {
        game.changeIntegrity(10)
        reward.shrink();
      }
      reward.onProjectileCollision = function () {
        game.increaseScore(100);
        reward.shrink();
      }
    }
    // createReward(600, 80);
    // createReward(1000, 70);

    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 25);
      var yellowCircle = draw.circle(50, "yellow", 12, "blue")
      yellowCircle.x = 0;
      yellowCircle.y = 0;
      marker.addChild(yellowCircle);
      marker.x = x;
      marker.y = groundY - y;
      marker.velocityX = -.8;
      marker.rotationalVelocity = 0;


      marker.onPlayerCollision = function () { startLevel() };
      marker.onProjectileCollision = function () { startLevel() };
      game.addGameItem(marker);
    }
    // createMarker(1300, 50);
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      for (var i = 0; i < levelObjects.length; i++) {
        if (levelObjects[i].type === "sawblade") {
          createSawBlade((levelObjects[i].x), (levelObjects[i].y))
        } else if (levelObjects[i].type === "enemy") {
          createEnemy((levelObjects[i].x), (levelObjects[i].y))
        } else if (levelObjects[i].type === "reward") {
          createReward((levelObjects[i].x), (levelObjects[i].y))
        } else if (levelObjects[i].type === "marker") {
          createMarker((levelObjects[i].x), (levelObjects[i].y))
        }
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }

    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
