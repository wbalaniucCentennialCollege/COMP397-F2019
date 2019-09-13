// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickableButton;
    function Init() {
        console.log("Initialization Start");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
        helloLabel.rotation += 5;
    }
    function clickableButtonMouseClick() {
        helloLabel.text = "Clicked";
        console.log("AHHHHHHH");
    }
    function Main() {
        console.log("Game Start...");
        helloLabel = new objects.Label("Hello World", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel); // Add the label to the stage
        // Button Initialization
        clickableButton = new objects.Button("./Assets/ClickMeButton.png", 320, 340);
        clickableButton.regX = 95;
        clickableButton.regY = 24.5;
        clickableButton.on("click", clickableButtonMouseClick);
        stage.addChild(clickableButton);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map