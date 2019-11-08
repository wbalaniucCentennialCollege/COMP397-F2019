module objects {
    export class Explosion extends objects.GameObject {
        // Variables
        private explosionSFX: createjs.AbstractSoundInstance;
        // Constructor
        constructor(x: number, y: number) {
            super("explosion");
            this.x = x;
            this.y = y;

            this.Start();
        }
        // Functions
        public Start():void {
            // Play our sound
            this.explosionSFX = createjs.Sound.play("explosion");
            this.explosionSFX.volume = 0.5;

            // Register for animationend event
            this.on("animationend", this.animationEnded.bind(this), false);
        }
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}

        private animationEnded():void {
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        }
    }
}