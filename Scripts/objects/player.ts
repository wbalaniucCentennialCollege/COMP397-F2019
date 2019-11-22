module objects {
    export class Player extends objects.GameObject {
        // Variables
        private laserSpawn:math.Vec2;

        public isDead:boolean;
        // Constructor
        constructor() {
            super("player");
            this.Start();
        }
        // Methods
        public Start():void {
            // Set the initial position
            this.y = 700;
            this.x = 320;
            
            this.isDead = false;
            
            //this.scaleX = 0.25;
            //this.scaleY = 0.25;
        }
        public Update():void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
            this.LaserFire();
        }
        public Reset():void {}
        public Move():void {
            // We reference the stage object and get mouse position
            // this.x = managers.Game.stage.mouseX;
            // This is evetually replaced with keyboard input

            // When I use "managers.Game.keyboardManager" it is a reference 
            // to the global keyboardmanager object
            if(managers.Game.keyboardManager.moveLeft)
            {
                this.x -= 7.5;
            }
            if(managers.Game.keyboardManager.moveRight)
            {
                this.x += 7.5;
            }
            if(managers.Game.keyboardManager.moveUp)
            {
                this.y -= 7.5;
            }
            if(managers.Game.keyboardManager.moveDown)
            {
                this.y += 7.5;
            }
            // Maybe xbox controller...
        }
        public CheckBound():void {
            // Right boundary
            if(this.x >= 640 - this.halfW) {
                this.x = 640 - this.halfW;
            }

            // Left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }
        }

        public LaserFire():void {
            if(!this.isDead) {
                let ticker:number = createjs.Ticker.getTicks();

                // Player is trying to shoot the laser
                if((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                    this.laserSpawn = new math.Vec2(this.x, this.y - this.halfH);
                    managers.Game.laserManager.GetLaser(this.laserSpawn);
                }
            }
        }
    }
}