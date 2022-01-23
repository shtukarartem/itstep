import { Dog } from "./Dog";
import { Cat } from "./Cat";
import { Hourse } from "./Horse";
import { Animal } from "./Animal";

class Vet {
    
treatAnimal(animal:Animal):void{
    console.log(`Животное ест ${animal.food}  еду спит ${animal.location}`)
}

}


let animals:Animal[]=[]
animals.push(new Cat("кошачий корм"," в доме","барсик",true))
animals.push(new Dog("собачий корм"," в будке","что-то",true))
animals.push(new Hourse("Овес"," в загоне","Спирит",false))

let vet = new Vet();
for(let i:number = 0; i < animals.length;i++){
    vet.treatAnimal(animals[i]);
}