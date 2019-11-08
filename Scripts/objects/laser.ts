module objects {
    export class Laser extends objects.GameObject {
        // Variables
        // Constructor
        constructor()
        {
            super("laser1");

            this.Start();
        }
        // Methods
        public Start():void {
            // We may have to scale the laser to an appropriate size

            this.speedX = 0;
            this.speedY = -10;

            this.Reset();
        }
        public Update():void {
            this.Move();
        }
        public Reset():void {
            this.x = -5000;
            this.y = -5000;
        }
        public Move():void {
            this.y += this.speedY;
        }

        public Main():void {}
        public CheckBounds():void {}
    }
}