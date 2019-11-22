module managers {
    export class Laser {
        // Variables
        private Lasers:math.Queue<objects.Laser>;
        private activeLasers: objects.Laser[];
        private laserCount:number;

        private testCounter:number = 0;
        // Constructor
        constructor() {
            this.Start();
        }
        // Functions / Methods
        private buildLaserPool():void {
            for(let i = 0; i < this.laserCount; i++)
            {
                this.Lasers.push(new objects.Laser);
            }
        }

        public Start():void {
            this.laserCount = 50;
            // Initialize my laser array
            this.Lasers = new math.Queue<objects.Laser>();
            this.activeLasers = new Array<objects.Laser>();
            this.buildLaserPool();
        }

        public Update():void {

            this.activeLasers.forEach(l => {
                if(l.isActive) {
                    l.Update();
                } else {
                    let index = this.activeLasers.indexOf(l, 0);
                    if(index > -1) {
                        this.Lasers.push(this.activeLasers.splice(index, 1)[0]);
                    }
                    // managers.Game.currentSceneObject.removeChild(l);
                    l.Reset();
                }
            });
        }

        public GetLaser(pos: math.Vec2):objects.Laser {
            let laser:objects.Laser = this.Lasers.pop();
            laser.x = pos.x;
            laser.y = pos.y;
            laser.isActive = true;
            this.activeLasers.push(laser);
            managers.Game.currentSceneObject.addChild(laser);
            this.testCounter++;
            if(this.testCounter > 50)
            {
                console.log("WHYY");
            }
            return laser;
        }
    }
}