import { Animal } from "./Animal";

class Cat extends Animal {
    play:boolean;
    name:string
    constructor(food:string,location:string,name:string,play:boolean){
        super(food,location);
        this.play = play;
        this.name = name;
    }

    eat():void{
        console.log(`Кот ест свою ${this.food}`)
    }

    makeNoise():void{
        console.log(`Кот мяукает`)
    }

    getCat():void{
        if (this.play == true){
            console.log(`Кот ${this.name} игривый`)
        } else console.log(`Кот ${this.name} не игривый`)
    }

}
export{Cat};