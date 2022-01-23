import { Hero } from "./hero";

enum Weapon {"Sword","Bow"}



class Warrior extends Hero{
    Weapon:Weapon[];
    arrowsNumber:number;
    constructor(Name:string, HP:number,XP:number,Weapon:Weapon[], arrowsNumber:number){
        super(Name,HP,XP)
        this.Weapon = Weapon;
        this.arrowsNumber = arrowsNumber;
    }
    
}