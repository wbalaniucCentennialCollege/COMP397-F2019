// Immediate Invoked Anonymous Function

(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:createjs.Text;

    function Init() {
        console.log("Initialization Start");
        Start();
    }

    function Start() {
        console.log("Starting Application...");

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update() {
        stage.update();
        helloLabel.scaleX += 0.001;
        helloLabel.scaleY += 0.001;
    }

    function Main() {
        console.log("Game Start...");

        helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;

        stage.addChild(helloLabel); // Add the label to the stage
    }

    window.onload = Init;
})();