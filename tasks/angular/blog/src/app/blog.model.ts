export interface Blog {
    title:string;
    date:Date;
    user:string;
    preview:string;
    img:string;
    text:string;
    favorite:boolean;
    id:number;

    /*constructor(title:string, date:Date,user:string,preview:string,text:string){
        this.title = title;
        this.date = date;
        this.user = user;
        this.preview = preview;
        this.img = "https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg";
        this.text = text;
        this.favorite = false;
    }*/
}
