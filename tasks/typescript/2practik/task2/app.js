"use strict";
exports.__esModule = true;
var Dog_1 = require("./Dog");
var Cat_1 = require("./Cat");
var Horse_1 = require("./Horse");
var Vet = /** @class */ (function () {
    function Vet() {
    }
    Vet.prototype.treatAnimal = function (animal) {
        console.log("\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0435\u0441\u0442 ".concat(animal.food, "  \u0435\u0434\u0443 \u0441\u043F\u0438\u0442 ").concat(animal.location));
    };
    return Vet;
}());
var animals = [];
animals.push(new Cat_1.Cat("кошачий корм", " в доме", "барсик", true));
animals.push(new Dog_1.Dog("собачий корм", " в будке", "что-то", true));
animals.push(new Horse_1.Hourse("Овес", " в загоне", "Спирит", false));
var vet = new Vet();
for (var i = 0; i < animals.length; i++) {
    vet.treatAnimal(animals[i]);
}
