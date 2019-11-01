module objects {
    export class Explosion extends objects.GameObject {
        // Variables
        private explosionSFX: createjs.AbstractSoundInstance;
        // Constructor
        constructor(x: number, y: number) {
            super("explosion");

            // Play our sound
            this.explosionSFX = createjs.Sound.play("explosion");
            this.explosionSFX.volume = 0.5;

            this.x = x;
            this.y = y;
        }
        // Functions
        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }
}