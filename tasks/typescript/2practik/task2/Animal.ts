class Animal{
    food:string;
    location:string

    constructor(food:string, location:string){
        this.food = food;
        this.location = location;
    }

    makeNoise():void{
        console.log("Животное спит");
    }
    eat():void{
        console.log("Животное ест");
    }
    sleep():void{
        console.log("Животное спит тут")
    }

}
export{Animal};