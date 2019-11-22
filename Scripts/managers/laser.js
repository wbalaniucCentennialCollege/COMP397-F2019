var managers;
(function (managers) {
    var Laser = /** @class */ (function () {
        // Constructor
        function Laser() {
            this.testCounter = 0;
            this.Start();
        }
        // Functions / Methods
        Laser.prototype.buildLaserPool = function () {
            for (var i = 0; i < this.laserCount; i++) {
                this.Lasers.push(new objects.Laser);
            }
        };
        Laser.prototype.Start = function () {
            this.laserCount = 50;
            // Initialize my laser array
            this.Lasers = new math.Queue();
            this.activeLasers = new Array();
            this.buildLaserPool();
        };
        Laser.prototype.Update = function () {
            var _this = this;
            this.activeLasers.forEach(function (l) {
                if (l.isActive) {
                    l.Update();
                }
                else {
                    var index = _this.activeLasers.indexOf(l, 0);
                    if (index > -1) {
                        _this.Lasers.push(_this.activeLasers.splice(index, 1)[0]);
                    }
                    l.Reset();
                }
            });
        };
        Laser.prototype.GetLaser = function (pos) {
            var laser = this.Lasers.pop();
            laser.x = pos.x;
            laser.y = pos.y;
            laser.isActive = true;
            this.activeLasers.push(laser);
            managers.Game.currentSceneObject.addChild(laser);
            this.testCounter++;
            if (this.testCounter > 50) {
                console.log("WHYY");
            }
            return laser;
        };
        Laser.prototype.CheckCollisions = function (arr) {
            var _this = this;
            arr.forEach(function (a) {
                _this.activeLasers.forEach(function (laser) {
                    managers.Collision.CheckAABB(laser, a);
                });
            });
        };
        return Laser;
    }());
    managers.Laser = Laser;
})(managers || (managers = {}));
//# sourceMappingURL=laser.js.map