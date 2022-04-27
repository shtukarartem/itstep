import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Coment, CommentService, PostService, UserService } from 'src/app/core';
import { PostRoutingModule } from '../post-routing.module';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {

  post:any;
  comments:Coment[] = [];


  constructor(private commentService:CommentService ,private userService:UserService, private route:ActivatedRoute, router:Router) { 

  }
  dataGet(comment:Coment):void{
    let data:Coment = {id: comment.id, postId:comment.postId, date: comment.date, userId: comment.userId, text:comment.text}
    this.commentService.create(data);
    this.comments = this.commentService.getByPost(this.post.id)
  }
  ngOnInit(): void {
   this.route.data.subscribe(data => {
     if (data["post"])
     this.post = data["post"];

   });
   this.comments = this.commentService.getByPost(this.post.id)
   console.log(this.post)
  }
  
  /*getUserName(userId:number):string{
    return this.userService.getById(userId)?.name
  }*/
}
