import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'this is new project';// интеропляция 
  name:string = 'Артем'// интеропляция
  link: string = "https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg"//привязка к атрибуту
  calc:number =0;
  red:string = ""

  addCalc():void{
    this.calc++
  }

  bgCl():void{
    this.red ="color"
 
  }
  bgClout():void{
    this.red = ""
 
  }
}
