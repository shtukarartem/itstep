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
exports.Dog = void 0;
var Animal_1 = require("./Animal");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(food, location, name, guard) {
        var _this = _super.call(this, food, location) || this;
        _this.guard = guard;
        _this.name = name;
        return _this;
    }
    Dog.prototype.eat = function () {
        console.log("\u0421\u043E\u0431\u0430\u043A\u0430 \u0435\u0441\u0442 \u0441\u0432\u043E\u044E ".concat(this.food));
    };
    Dog.prototype.makeNoise = function () {
        console.log("\u0421\u043E\u0431\u0430\u043A\u0430 \u043B\u0430\u0435\u0442");
    };
    Dog.prototype.getDog = function () {
        if (this.guard == true) {
            console.log("\u0421\u043E\u0431\u0430\u043A\u0430 ".concat(this.name, " \u0441\u0442\u043E\u0440\u0430\u0436\u0435\u0432\u0430\u044F"));
        }
        else
            console.log("\u0421\u043E\u0431\u0430\u043A\u0430 ".concat(this.name, " \u043D\u0435 \u0441\u0442\u043E\u0440\u0430\u0436\u0438\u0432\u0430\u044F"));
    };
    return Dog;
}(Animal_1.Animal));
exports.Dog = Dog;
