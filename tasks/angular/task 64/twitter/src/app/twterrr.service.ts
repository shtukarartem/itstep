import { Injectable } from '@angular/core';
import { Twitmodel } from './twitmodel.model';



export class TwterrrService {

  twitList:Twitmodel[] =[
    {userName: "oxxxymiron", twitText: "Альбом завтра!"},
    {userName: "alkfdjsa", twitText: "Наконец-то!"}
   ];


   getData():Twitmodel[]{
    return this.twitList; }


addTwit(twit: Twitmodel){
this.twitList.push(twit)
}
}
