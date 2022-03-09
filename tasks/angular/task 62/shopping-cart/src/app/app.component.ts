import { Component, ViewChild, ElementRef} from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  disp:string = "btnDnone"
  btDisp:string = "btnBlock"

  tasks:Item[] = [
    { productcode:312, title:"Хлеб",  priceofoneitem:12, amount:2},
    { productcode:618, title:"Молоко",  priceofoneitem:11, amount:1},
    { productcode:5423, title:"Курица",  priceofoneitem:34, amount:1}
  ];

  totalPrice():number{
    let total:number =0;
      this.tasks.forEach(function(item:Item){
        total = total +(item.priceofoneitem * item.amount)
      })
      return total
    
  }

  addProduct(productcode:string,title:string,priceofoneitem:string,amount:string ):void{
    if(title != "" && productcode != ""  && priceofoneitem != "" && amount != "" )
        this.tasks.push({
          productcode:  parseInt(productcode), 
          title: title,
          priceofoneitem: parseInt(priceofoneitem),
          amount:parseInt(amount)
        })
}
deleteProduct(i:number){
  this.tasks.splice(i,1)
}
ind:number = 0;
changeProduct(i:number):void{
  this.disp = "btnBlock"
  this.btDisp = "btnDnone"
  this.ind = i;
}

commit(productcode:string,title:string,priceofoneitem:string,amount:string):void{
this.tasks[this.ind].productcode = parseInt(productcode);
this.tasks[this.ind].title = title;
this.tasks[this.ind].priceofoneitem = parseInt(priceofoneitem);
this.tasks[this.ind].amount = parseInt(amount);
        this.disp = "btnDnone"
        this.btDisp = "btnBlock"
}

}






