var managers;
(function (managers) {
    var Laser = /** @class */ (function () {
        // Constructor
        function Laser() {
            this.Start();
        }
        // Functions / Methods
        Laser.prototype.buildLaserPool = function () {
            for (var i = 0; i < this.laserCount; i++) {
                this.Lasers[i] = new objects.Laser();
            }
        };
        Laser.prototype.Start = function () {
            this.laserCount = 50;
            // Initialize my laser array
            this.Lasers = new Array();
            this.ActiveLasers = new Array();
            this.buildLaserPool();
            this.CurrentLaser = 0;
        };
        Laser.prototype.Update = function () {
            for (var i = 0; i < this.ActiveLasers.length; i++) {
                this.ActiveLasers[i].Update();
                if (!this.ActiveLasers[i].isActive) {
                    this.Lasers.push(this.ActiveLasers[i]);
                }
            }
        };
        Laser.prototype.GetLaser = function (pos) {
            var l = this.Lasers[this.CurrentLaser];
            l.isActive = true;
            l.x = pos.x;
            l.y = pos.y;
            this.ActiveLasers.push(l);
            this.CurrentLaser++;
            this.CurrentLaser %= 50;
            return l;
        };
        return Laser;
    }());
    managers.Laser = Laser;
})(managers || (managers = {}));
//# sourceMappingURL=laser.js.map