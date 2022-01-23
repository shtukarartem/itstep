"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector.prototype.getLong = function () {
        var long = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
        return console.log("\u0414\u043B\u0438\u043D\u043D\u0430 \u0432\u0435\u043A\u0442\u043E\u0440\u0430 \u0440\u0430\u0432\u043D\u0430: ".concat(long));
    };
    Vector.prototype.getScalarProduct = function (x, y, z) {
        var scalarProduct = this.x * x + this.y * y + this.z + z;
        return console.log("\u0441\u043A\u043E\u043B\u044F\u0440\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432\u0435\u043A\u0442\u043E\u0440\u0430 \u0440\u0430\u0432\u043D\u0430: ".concat(scalarProduct));
    };
    //Math.floor(Math.random() * 181
    Vector.getRandom = function (N) {
        var vectorArr = [];
        for (var i = 0; i < N; i++) {
            vectorArr.push(new Vector(Math.random(), Math.random(), Math.random()));
        }
        return console.log(vectorArr);
    };
    return Vector;
}());
exports.Vector = Vector;
