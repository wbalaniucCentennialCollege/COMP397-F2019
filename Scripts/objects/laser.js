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
    var Laser = /** @class */ (function (_super) {
        __extends(Laser, _super);
        // Variables
        // Constructor
        function Laser() {
            var _this = _super.call(this, "laser1") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Laser.prototype.Start = function () {
            // We may have to scale the laser to an appropriate size
            this.speedX = 0;
            this.speedY = -10;
            this.Reset();
        };
        Laser.prototype.Update = function () {
            this.Move();
        };
        Laser.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        Laser.prototype.Move = function () {
            this.y += this.speedY;
        };
        Laser.prototype.Main = function () { };
        Laser.prototype.CheckBounds = function () { };
        return Laser;
    }(objects.GameObject));
    objects.Laser = Laser;
})(objects || (objects = {}));
//# sourceMappingURL=laser.js.map