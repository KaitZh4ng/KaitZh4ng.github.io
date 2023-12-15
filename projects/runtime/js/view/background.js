var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, canvasHeight, 'purple');
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            var Wonderland = draw.bitmap("img/wonderland.png");
            Wonderland.x = 0;
            Wonderland.y = 0;
            Wonderland.scaleX = 0.75;
            Wonderland.scaleY = 0.75;
            background.addChild(Wonderland);
            var riddle = draw.bitmap("img/riddle.png");
            riddle.x = 1000;
            riddle.y = 95;
            riddle.scaleX = 0.55;
            riddle.scaleY = 0.55;
            background.addChild(riddle);
            for(var i = 0; i <= 50; i++) {
                var roseTwo = draw.bitmap("img/roseTwo.png");
                roseTwo.x = canvasWidth * Math.random();
                roseTwo.y = groundY * Math.random();
                roseTwo.scaleX = 0.08;
                roseTwo.scaleY = 0.08;
                background.addChild(roseTwo);
            }
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 20; ++i) {
                var buildingHeight = Math.random() * 240 + 100;
                var building = draw.rect(75, buildingHeight, "darkGreen", "Black", 1);
                building.x = 200 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
              }
            
            // TODO 3: Part 1 - Add a tree(changed to rose)
            rose = draw.bitmap("img/rose.png");
            rose.x = 1000;
            rose.y = groundY - 250;
            rose.scaleX = 0.55;
            rose.scaleY = 0.55;
            background.addChild(rose);
            
        } // end of render function - DO NOT DELETE
        var rose;
        
        // Perform background animation
        var buildings = [];
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree(rose)!
            rose.x = rose.x - 1;
            if (rose.x < -200) {
            rose.x = canvasWidth;
}
            
            // TODO 4: Part 2 - Parallax
            for (var house = 0; house < buildings.length; house++) {
                var eachElement = buildings[house];
                eachElement.x -= 1.5
              }
                // code to do something with each element
              

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
