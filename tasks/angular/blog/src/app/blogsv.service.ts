import { Blog } from "./blog.model";


export class BlogsvService {

   users:string[] = ["Вася","Петя","Маша"]
   data: Blog[] = [{id:1, title:"Это мой первый блог", date: new Date(), user:"Вася", preview:"Первый нах", text:"Ну а чего я могу", img:"https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg",favorite: false}]

  getData(): Blog[]{
    return this.data;
  }
  addData(blog:Blog):void{
    this.data.push(blog)
    console.log(this.data)
  }
  addFavorite(blog:Blog):void{
    let index = this.data.indexOf(blog);

    if(index !== -1){
      this.data[index].favorite = !this.data[index].favorite
    /*if(this.data[index].favorite == false){
    this.data[index].favorite = true;}

    if(this.data[index].favorite == true){
    this.data[index].favorite = false;}*/
    }
  }
  getUsers(): string[]{
    return this.users
  }
  getById(id: number): Blog{
    let index = this.data.findIndex(function(item:Blog){
        return item.id == id;
    });

    return this.data[index];
}
}
