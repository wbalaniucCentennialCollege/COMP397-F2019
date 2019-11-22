module managers {
    export class Laser {
        // Variables
        public Lasers:objects.Laser[];  // Hold a set of instantiated lasers
        public ActiveLasers:objects.Laser[];    // Holds active lasers
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
            this.ActiveLasers = new Array<objects.Laser>();
            this.buildLaserPool();
            this.CurrentLaser = 0;
        }

        public Update():void {
            for(let i: number = 0; i < this.ActiveLasers.length; i++)
            {
                this.ActiveLasers[i].Update();

                if(!this.ActiveLasers[i].isActive)
                {
                    this.Lasers.push(this.ActiveLasers[i]);
                }
            }
        }

        public GetLaser(pos: math.Vec2):objects.Laser {
            let l = this.Lasers[this.CurrentLaser];
            l.isActive = true;
            l.x = pos.x;
            l.y = pos.y
            this.ActiveLasers.push(l);
            this.CurrentLaser++;
            this.CurrentLaser %= 50;
            return l;
        }
    }
}