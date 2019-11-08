var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player() {
            var _this = _super.call(this, "player") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            // Set the initial position
            this.y = 700;
            this.x = 320;
            this.isDead = false;
            //this.scaleX = 0.25;
            //this.scaleY = 0.25;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound(); // <-- Check collisions
            this.LaserFire();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // We reference the stage object and get mouse position
            // this.x = managers.Game.stage.mouseX;
            // This is evetually replaced with keyboard input
            // When I use "managers.Game.keyboardManager" it is a reference 
            // to the global keyboardmanager object
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 7.5;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 7.5;
            }
            if (managers.Game.keyboardManager.moveUp) {
                this.y -= 7.5;
            }
            if (managers.Game.keyboardManager.moveDown) {
                this.y += 7.5;
            }
            // Maybe xbox controller...
        };
        Player.prototype.CheckBound = function () {
            // Right boundary
            if (this.x >= 640 - this.halfW) {
                this.x = 640 - this.halfW;
            }
            // Left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
        };
        Player.prototype.LaserFire = function () {
            if (!this.isDead) {
                var ticker = createjs.Ticker.getTicks();
                // Player is trying to shoot the laser
                if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                    this.laserSpawn = new math.Vec2(this.x, this.y - this.halfH);
                    var currentLaser = managers.Game.laserManager.CurrentLaser;
                    var laser = managers.Game.laserManager.Lasers[currentLaser];
                    laser.x = this.laserSpawn.x;
                    laser.y = this.laserSpawn.y;
                    managers.Game.laserManager.CurrentLaser++;
                    if (managers.Game.laserManager.CurrentLaser > 49) {
                        managers.Game.laserManager.CurrentLaser = 0;
                    }
                    // Play a laser sound
                }
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map