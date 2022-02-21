import { Component, ViewChild, ElementRef } from '@angular/core';
import { Item } from './item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    disp:string = "btnDnone"
    btDisp:string = "btnBlock"
    title:string = "";

    tasks:Item[] = [
                    {title:"Сварить яйца", done: false,  priceOfOneItem: 312},
                    {title:"Прочитать книгу по Javascript", done: false, priceOfOneItem: 313},
                    {title:"Сходить на работу", done: true, priceOfOneItem: 314}
                ];

    addTask(title:string):void{
        if(title != "")
            this.tasks.push({
                title: title,
                done: false,
                priceOfOneItem: 312
            })
    }
    countTask():string{
        let isDone:number = 0;
        let notIsDone:number = 0
        this.tasks.forEach(function(item:Item){
            if (item.done == true){
                isDone++
            }else notIsDone++

        })
        return `Выполнено ${isDone}, Не выполнено ${notIsDone}`
    }

    chekedTask(i:number):void{
        this.tasks[i].done = !this.tasks[i].done

    }

    deleteTask(i:number):void{
        this.tasks.splice(i,1)
    }
    ind:number = 0;
    changeTask(i:number):void{     
        this.disp = "btnBlock"
        this.btDisp = "btnDnone"
        this.ind = i;
    }
    
    commit(title:string):void{
        this.tasks[this.ind].title = title;
        this.disp = "btnDnone"
        this.btDisp = "btnBlock"
    }

    @ViewChild("changeBtn",{static: false}) private nameButton:ElementRef;
    
    
    

 

}
