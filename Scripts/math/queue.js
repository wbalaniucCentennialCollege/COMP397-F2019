var math;
(function (math) {
    var Queue = /** @class */ (function () {
        function Queue() {
            this._arr = new Array();
        }
        Queue.prototype.push = function (val) {
            this._arr.push(val);
        };
        Queue.prototype.pop = function () {
            return this._arr.shift();
        };
        return Queue;
    }());
    math.Queue = Queue;
})(math || (math = {}));
//# sourceMappingURL=queue.js.map