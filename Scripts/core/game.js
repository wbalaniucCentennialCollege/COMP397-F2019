// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    // Store current scene and state information
    var currentScene;
    var currentState;
    var keyboardManager;
    var textureAtlasData; // JSON file. It has a variety of types
    var textureAtlas;
    textureAtlasData = {
        "images": [
            "./Assets/Sprites/textureAltas.png"
        ],
        "framerate": 20,
        "frames": [
            [0, 0, 98, 84, 0, 0, 0],
            [98, 0, 41, 60, 0, 0, 0],
            [139, 0, 39, 31, 0, 0, 0],
            [139, 31, 39, 31, 0, 0, 0]
        ],
        "animations": {
            "enemy": { "frames": [0] },
            "player": { "frames": [1] },
            "backButton": { "frames": [2] },
            "nextButton": { "frames": [3] }
        },
    };
    assetManifest = [
        { id: "background", src: "./Assets/background.png" },
        { id: "explosion", src: "./Assets/Sound/explosion.ogg" },
        { id: "play_music", src: "./Assets/Sound/level_music.wav" },
        { id: "start_music", src: "./Assets/Sound/start_music.wav" }
    ];
    function Init() {
        console.log("Initialization Start");
        // Start();
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        // Set up default game state
        // Create a global reference to our stage object
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        // Create our keyboard object and set the global reference
        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;
        // Setup global reference to asset manager and textureAtlas
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != managers.Game.currentScene) {
            console.log("Changing scenes to" + managers.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function clickableButtonMouseClick() {
        console.log("AHHHHHHH");
    }
    function Main() {
        console.log("Game Start...");
        // Finite State Machine
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map