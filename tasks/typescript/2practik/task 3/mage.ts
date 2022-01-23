import { Hero } from "./hero";

enum spell {"Fireball","Thunderbolt"}



class Mage extends Hero{
    spellbook:spell[];
    mana:number;
    constructor(Name:string, HP:number,XP:number,spellbook:spell[], mana:number){
        super(Name,HP,XP)
        this.spellbook = spellbook;
        this.mana = mana;
    }
    
}