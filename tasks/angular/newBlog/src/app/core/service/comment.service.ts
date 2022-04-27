import { Injectable } from '@angular/core';
import { Coment } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }
  data:Coment[]=[
    {
      id:1,
      userId:1,
      postId:1,
      date: new Date(),
      text:"Первый комментарий"
    },
    {
      id:2,
      userId:2,
      postId:1,
      date: new Date(),
      text:"второй комментарий"
    }
  ];
  newCommentId:number = 3;



  getByPost(id:number):Coment[]{
    return this.data.filter(function(item:Coment){
      return item.postId == id;
    });
  }

  create(coment:Coment){
    this.data.push(coment);
    this.newCommentId++
  }
  
  getNewCommentId(){
    return this.newCommentId
  }
}
