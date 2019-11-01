module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private background2:objects.Background;
        private player:objects.Player;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private scoreBoard:managers.Scoreboard;

        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize background
            this.background = new objects.Background(this.assetManager);
            this.background2 = new objects.Background(this.assetManager);
            this.background.y = -124;
            // Initialize player
            this.player = new objects.Player(this.assetManager);

            // Initialize enemies
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }

            // Initialize my scoreboard
            this.scoreBoard = new managers.Scoreboard;
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            
            // Initialize Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3;

            this.Main();
        }

        public Update(): void {
            // Update the background here
            this.background.Update();
            this.background2.Update();
            this.player.Update();
            // this.enemy.Update();

            this.enemies.forEach(e => {
                e.Update();
                this.player.isDead = managers.Collision.Check(this.player, e);

                if(this.player.isDead) {
                    // Disable music
                    this.backgroundMusic.stop();
                    objects.Game.currentScene = config.Scene.OVER;
                }
            });
        }

        public Main(): void {
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.addChild(this.background2);
            this.addChild(this.player);
            // this.addChild(this.enemy);s
            this.enemies.forEach(e => {
                this.addChild(e);
            });
            
            this.addChild(this.scoreBoard);
        }
    }
}