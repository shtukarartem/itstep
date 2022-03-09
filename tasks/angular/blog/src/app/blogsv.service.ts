import { Blog } from "./blog.model";


export class BlogsvService {
  private data: Blog[] = [{title:"Это мой первый блог", date: new Date(), user:"Вася", preview:"Первый нах", text:"Ну а хуле я могу", img:"https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg"},]
  getData(): Blog[]{
    return this.data;
  }
  addData(blog:Blog):void{
    this.data.push(blog)
    console.log(blog)
  }
}
