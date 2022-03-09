import { Component, OnInit } from '@angular/core';
import { Twits } from './twits/twitinter';
import { createInjectorType } from '@angular/compiler/src/render3/r3_injector_compiler';
import { TwterrrService } from './twterrr.service';
import { Twitmodel } from './twitmodel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TwterrrService]
})
export class AppComponent implements OnInit{
  title = 'twitter';
  name:string = "";
  text:string = "";
   twitList:Twitmodel[] =[];
   constructor(private twiterService: TwterrrService){}

ngOnInit(){
  this.twitList = this.twiterService.getData();
}

addTwit($event:any):void{
  if($event.keyCode != 13)
  return;
  this.twitList.push({
    userName: this.name,
    twitText: this.text
  })
  this.name = "";
  this.text = "";
}




}
