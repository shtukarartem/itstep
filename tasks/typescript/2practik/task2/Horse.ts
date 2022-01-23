import { Animal } from "./Animal";

class Hourse extends Animal {
    ride:boolean;
    name:string;
    constructor(food:string,location:string,name:string, ride:boolean){
        super(food,location);
        this.ride = ride;
        this.name = name;
    }

    eat():void{
        console.log(`Лошадь ест свою ${this.food}`)
    }

    makeNoise():void{
        console.log(`Лошадь скачет`)
    }
    getHourse():void{
        if (this.ride == true){
            console.log(`Лошадь ${this.name} скакун`)
        } else console.log(`Лошадь ${this.name} не скакун`)
    }
}
export{Hourse}