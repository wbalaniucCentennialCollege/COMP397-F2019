module objects {
    export class Laser extends objects.GameObject {
        // Variables
        public isActive:boolean = false;
        // Constructor
        constructor()
        {
            super("laser1");

            this.Start();
        }
        // Methods
        public Start():void {
            // We may have to scale the laser to an appropriate size
            this.isActive = true;
            this.speedX = 0;
            this.speedY = -10;

            this.Reset();
        }
        public Update():void {
            this.Move();
        }
        public Reset():void {
            
        }
        public Move():void {
            this.y += this.speedY;

            if(this.y < 0)
            {
                this.isActive = false;
            }
        }

        public Main():void {}
        public CheckBounds():void {}
    }
}