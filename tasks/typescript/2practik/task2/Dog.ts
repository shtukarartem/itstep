import { Animal } from "./Animal";

class Dog extends Animal {
    guard:boolean;
    name:string;
    constructor(food:string,location:string,name:string, guard:boolean){
        super(food,location);
        this.guard = guard;
        this.name = name;
    }

    eat():void{
        console.log(`Собака ест свою ${this.food}`)
    }

    makeNoise():void{
        console.log(`Собака лает`)
    }
    getDog():void{
        if (this.guard == true){
            console.log(`Собака ${this.name} сторажевая`)
        } else console.log(`Собака ${this.name} не стораживая`)
    }
}
export{Dog};