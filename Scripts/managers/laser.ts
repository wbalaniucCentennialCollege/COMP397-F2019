module managers {
    export class Laser {
        // Variables
        public Lasers:objects.Laser[];  // Hold a set of instantiated lasers
        public CurrentLaser:number; 

        private laserCount:number;
        // Constructor
        constructor() {
            this.Start();
        }
        // Functions / Methods
        private buildLaserPool():void {
            for(let i = 0; i < this.laserCount; i++)
            {
                this.Lasers[i] = new objects.Laser();
            }
        }

        public Start():void {
            this.laserCount = 50;
            // Initialize my laser array
            this.Lasers = new Array<objects.Laser>();
            this.buildLaserPool();
            this.CurrentLaser = 0;
        }

        public Update():void {
            this.Lasers.forEach(laser => {
                laser.Update();
            });
        }
    }
}