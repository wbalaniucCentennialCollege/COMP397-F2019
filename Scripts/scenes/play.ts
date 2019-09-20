module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize our variables
            this.background = new objects.Background(this.assetManager);
            this.Main();
        }

        public Update(): void {
            // Update the background here
            this.background.Update();
        }

        public Main(): void {
            this.addChild(this.background);
        }
    }
}