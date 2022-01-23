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
exports.Hourse = void 0;
var Animal_1 = require("./Animal");
var Hourse = /** @class */ (function (_super) {
    __extends(Hourse, _super);
    function Hourse(food, location, name, ride) {
        var _this = _super.call(this, food, location) || this;
        _this.ride = ride;
        _this.name = name;
        return _this;
    }
    Hourse.prototype.eat = function () {
        console.log("\u041B\u043E\u0448\u0430\u0434\u044C \u0435\u0441\u0442 \u0441\u0432\u043E\u044E ".concat(this.food));
    };
    Hourse.prototype.makeNoise = function () {
        console.log("\u041B\u043E\u0448\u0430\u0434\u044C \u0441\u043A\u0430\u0447\u0435\u0442");
    };
    Hourse.prototype.getHourse = function () {
        if (this.ride == true) {
            console.log("\u041B\u043E\u0448\u0430\u0434\u044C ".concat(this.name, " \u0441\u043A\u0430\u043A\u0443\u043D"));
        }
        else
            console.log("\u041B\u043E\u0448\u0430\u0434\u044C ".concat(this.name, " \u043D\u0435 \u0441\u043A\u0430\u043A\u0443\u043D"));
    };
    return Hourse;
}(Animal_1.Animal));
exports.Hourse = Hourse;
