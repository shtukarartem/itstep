class Vector{
    x : number;
    y : number;
    z : number;

    constructor(x : number, y : number, z: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getLong():void{
        let long:number = Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2 );
        return console.log(`Длинна вектора равна: ${long}`)
    }

    getScalarProduct(x:number,y:number,z:number):void{
        let scalarProduct = this.x*x + this.y*y + this.z + z;
        return console.log(`сколярное произведение вектора равна: ${scalarProduct}`)
    }
    //Math.floor(Math.random() * 181
    static getRandom(N:number):void{
        let vectorArr : Vector[] = [];
        for (let i:number = 0; i < N; i++){
            vectorArr.push( new Vector(Math.random(),Math.random(),Math.random()));
        }
        return console.log(vectorArr)
    }
}

export{Vector};