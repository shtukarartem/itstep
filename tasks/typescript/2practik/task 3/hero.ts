interface CanTakeDamage{
    TakeDamage(num : number): number
}

class Hero{
    Name : string;
    HP : number;
    XP : number;

    constructor(Name:string, HP:number,XP:number){
        this.Name = Name;
        this.HP = HP;
        this.XP = XP;
    }

    isDead():boolean{
        if (this.HP <= 0) return true;
        else return false;
    };

    isMage(char:string):boolean{
        if (char == "yes") return true
        else return false
    }

    isWarrior(char:string):boolean{
        if (char == "yes") return true
        else return false
    }
   
    Attack(enemy:CanTakeDamage,num:number):void{
        enemy.TakeDamage(num)
        return console.log(`${enemy} нанесено ${num} урона`)
    }




}
export{Hero};