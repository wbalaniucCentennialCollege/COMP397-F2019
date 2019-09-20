module objects {
    export class Player extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
        }
        // Methods
        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {
            // We reference the stage objects and get mouse position
            // this.x = objects.Game.stage.mouseX;
            // This is evetually replaced with keyboard input
            // Maybe xbox controller...
        }
        public CheckBound():void {}
    }
}