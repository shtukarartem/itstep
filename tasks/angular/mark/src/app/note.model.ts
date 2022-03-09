export class Note {
    date:Date;
    text:string;
    name:string;

    constructor(date:Date, text:string, name:string){
        this.date = date;
        this.text = text;
        this.name = name;
    }
}
