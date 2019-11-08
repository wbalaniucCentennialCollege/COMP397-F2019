module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead: boolean = false;
        // Constructor
        constructor() {
            super("enemy");
            this.Start();
        }
        // Methods
        public Start():void {
            this.x = Math.floor(Math.random() * 550) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
            // this.Reset();
        }
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        public Reset():void {
            this.isDead = true;
            this.x = -1000;
            this.y = -1000;
        }
        public Move():void {
            this.y += 5;
        }
        public CheckBounds():void {
            if(this.y >= 900 + this.halfH + 5) {
                this.y = -50;
            }
        }
    }
}