// Immediate Invoked Anonymous Function

(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene and state information
    let currentScene:objects.Scene;
    let currentState:number

    let keyboardManager: managers.Keyboard;

    let textureAtlasData: any;              // JSON file. It has a variety of types
    let textureAtlas: createjs.SpriteSheet;

    textureAtlasData = {

        "images": [
            ""
        ],
        
        "framerate": 20,
        "frames": [
            [0, 0, 98, 84, 0, 0, 0],
            [0, 84, 36, 36, 0, -45, -45],
            [36, 84, 39, 31, 0, 0, 0],
            [75, 84, 39, 31, 0, 0, 0],
            [98, 0, 74, 62, 0, -27, -31],
            [114, 62, 74, 62, 0, -27, -31],
            [172, 0, 68, 62, 0, -31, -31],
            [188, 62, 68, 62, 0, -31, -31],
            [240, 0, 66, 60, 0, -33, -31],
            [256, 60, 41, 60, 0, 0, 0]
        ],
        
        "animations": {
            "enemy": { "frames": [0] },
            "explosion": { 
                "frames": [1, 6, 8, 7, 4, 5],
                "speed": 0.1 
            },
            "backButton": { "frames": [2] },
            "nextButton": { "frames": [3] },
            "player": { "frames": [9] }
        },
    
    };

    assetManifest = [
        {id: "textureAtlas", src:"./Assets/Sprites/textureAltas.png"},
        {id: "background", src:"./Assets/background.png"},
        {id: "explosion", src:"./Assets/Sound/explosion.ogg"},
        {id: "play_music", src:"./Assets/Sound/level_music.wav"},
        {id: "start_music", src:"./Assets/Sound/start_music.wav"}
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

        textureAtlasData.images = [ assetManager.getResult("textureAtlas") ];
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
        if(currentState != managers.Game.currentScene) {
            console.log("Changing scenes to" + managers.Game.currentScene);
            Main();
        }

        currentScene.Update();

        stage.update();
    }

    function clickableButtonMouseClick():void {
        console.log("AHHHHHHH");
    }

    function Main() {
        console.log("Game Start...");

        // Finite State Machine
        switch(managers.Game.currentScene) {
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