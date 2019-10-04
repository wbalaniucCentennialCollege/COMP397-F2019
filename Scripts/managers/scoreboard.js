var managers;
(function (managers) {
    var Scoreboard = /** @class */ (function () {
        // Constructor
        function Scoreboard() {
            this.Init();
        }
        Object.defineProperty(Scoreboard.prototype, "Score", {
            get: function () {
                return this.score;
            },
            set: function (newScore) {
                this.score = newScore;
                this.scoreLabel.text = "Score: " + this.score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "HighScore", {
            get: function () {
                return this.highScore;
            },
            set: function (newHighScore) {
                this.highScore = newHighScore;
                this.highScoreLabel.text = "High Score: " + this.highScore;
            },
            enumerable: true,
            configurable: true
        });
        Scoreboard.prototype.Init = function () {
            // Create our labels
            this.scoreLabel = new objects.Label("Score: 999999", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.highScoreLabel = new objects.Label("High score: 0", "20px", "Consolas", "#FFFF00", 450, 10, false);
            // Set a default score 
            this.score = 0;
            this.highScore = 0;
        };
        return Scoreboard;
    }());
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map