import { Component } from '@angular/core';
import { Member } from './user/member';
import { Message } from './window/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text1:string = "";
  text2:string = "";

  title = 'chat';
  member1:Member = new Member("Петя");
  member2:Member = new Member("Вася");
  messagesList:Message[]=[];

  addMessage($event:any, num:number):void{
    if($event.keyCode != 13)
    return;

if(num == 1){
  this.messagesList.push({
    userName: this.member1.name,
    messageText: this.text1
  })
  this.text1 = ""
} else {
  this.messagesList.push({
    userName: this.member2.name,
    messageText: this.text2
  })
  this.text2 = ""
}
}
}