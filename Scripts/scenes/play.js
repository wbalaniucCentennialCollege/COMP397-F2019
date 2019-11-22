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
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            // Initialize background
            this.background = new objects.Background();
            this.background2 = new objects.Background();
            this.background.y = -124;
            // Initialize player
            this.player = new objects.Player();
            // Initialize laser manager
            this.laserManager = new managers.Laser();
            managers.Game.laserManager = this.laserManager;
            // Initialize enemies
            this.enemies = new Array();
            this.enemyNum = 5;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            // Initialize my scoreboard
            this.scoreBoard = new managers.Scoreboard;
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            // Initialize Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            // Update the background here
            this.background.Update();
            this.background2.Update();
            this.player.Update();
            this.laserManager.Update();
            this.enemies.forEach(function (e) {
                if (!e.isDead) {
                    e.Update();
                    managers.Collision.CheckAABB(_this.player, e);
                    _this.laserManager.ActiveLasers.forEach(function (laser) {
                        managers.Collision.CheckAABB(laser, e);
                    });
                }
            });
            // SUPER INEFFICIENT. WE WILL FIX THIS LATER AS WELL
            this.laserManager.Update();
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.addChild(this.background2);
            this.addChild(this.player);
            // this.addChild(this.enemy);s
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.laserManager.Lasers.forEach(function (laser) {
                _this.addChild(laser);
            });
            this.addChild(this.scoreBoard);
        };
        PlayScene.prototype.handleExplosion = function () {
            this.stage.removeChild(this.explosion);
            // this.isExploding = false;
            managers.Game.currentScene = config.Scene.OVER;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map