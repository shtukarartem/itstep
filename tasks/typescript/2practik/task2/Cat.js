"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cat = void 0;
var Animal_1 = require("./Animal");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(food, location, name, play) {
        var _this = _super.call(this, food, location) || this;
        _this.play = play;
        _this.name = name;
        return _this;
    }
    Cat.prototype.eat = function () {
        console.log("\u041A\u043E\u0442 \u0435\u0441\u0442 \u0441\u0432\u043E\u044E ".concat(this.food));
    };
    Cat.prototype.makeNoise = function () {
        console.log("\u041A\u043E\u0442 \u043C\u044F\u0443\u043A\u0430\u0435\u0442");
    };
    Cat.prototype.getCat = function () {
        if (this.play == true) {
            console.log("\u041A\u043E\u0442 ".concat(this.name, " \u0438\u0433\u0440\u0438\u0432\u044B\u0439"));
        }
        else
            console.log("\u041A\u043E\u0442 ".concat(this.name, " \u043D\u0435 \u0438\u0433\u0440\u0438\u0432\u044B\u0439"));
    };
    return Cat;
}(Animal_1.Animal));
exports.Cat = Cat;
