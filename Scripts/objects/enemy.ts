module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "enemy");
            this.Start();
        }
        // Methods
        public Start():void {
            this.x = 320;
            this.y = -50;
        }
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        public Reset():void {}
        public Move():void {
            this.y += 0.1;
        }
        public CheckBounds():void {
            if(this.y >= 900) {
                this.y = -50;
            }
        }
    }
}