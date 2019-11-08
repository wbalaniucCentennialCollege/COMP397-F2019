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
            ""
        ],
        "framerate": 20,
        "frames": [
            [0, 0, 98, 84, 0, 0, 0],
            [98, 0, 74, 62, 0, -27, -31],
            [172, 0, 74, 62, 0, -27, -31],
            [246, 0, 68, 62, 0, -31, -31],
            [98, 62, 68, 62, 0, -31, -31],
            [0, 84, 39, 31, 0, 0, 0],
            [39, 84, 39, 31, 0, 0, 0],
            [78, 84, 20, 24, 0, 0, 0],
            [166, 62, 66, 60, 0, -33, -31],
            [232, 62, 41, 60, 0, 0, 0],
            [273, 62, 36, 36, 0, -45, -45],
            [273, 98, 16, 21, 0, 0, 0]
        ],
        "animations": {
            "enemy": { "frames": [0] },
            "explosion": {
                "frames": [10, 3, 8, 4, 1, 2],
                "speed": 0.1
            },
            "backButton": { "frames": [5] },
            "nextButton": { "frames": [6] },
            "player": { "frames": [9] },
            "laser1": { "frames": [11] },
            "laser2": { "frames": [7] }
        },
    };
    assetManifest = [
        { id: "textureAtlas", src: "./Assets/Sprites/textureAltas.png" },
        { id: "background", src: "./Assets/background.png" },
        { id: "explosion", src: "./Assets/Sound/explosion.ogg" },
        { id: "play_music", src: "./Assets/Sound/level_music.wav" },
        { id: "start_music", src: "./Assets/Sound/start_music.wav" }
    ];
    function Init() {
        console.log("Initialization Start");
        // Start();
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        textureAtlasData.images = [assetManager.getResult("textureAtlas")];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
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
        managers.Game.currentSceneObject = currentScene;
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