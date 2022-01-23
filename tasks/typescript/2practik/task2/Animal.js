"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(food, location) {
        this.food = food;
        this.location = location;
    }
    Animal.prototype.makeNoise = function () {
        console.log("Животное спит");
    };
    Animal.prototype.eat = function () {
        console.log("Животное ест");
    };
    Animal.prototype.sleep = function () {
        console.log("Животное спит тут");
    };
    return Animal;
}());
exports.Animal = Animal;
