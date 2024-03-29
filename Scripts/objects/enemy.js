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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // Constructor
        function Enemy() {
            var _this = _super.call(this, "enemy") || this;
            // Variables
            _this.isDead = false;
            _this.Start();
            return _this;
        }
        // Methods
        Enemy.prototype.Start = function () {
            this.x = Math.floor(Math.random() * 550) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
            // this.Reset();
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Enemy.prototype.Reset = function () {
            this.isDead = true;
            this.x = -1000;
            this.y = -1000;
        };
        Enemy.prototype.Move = function () {
            this.y += 5;
        };
        Enemy.prototype.CheckBounds = function () {
            if (this.y >= 900 + this.halfH + 5) {
                this.y = -50;
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map