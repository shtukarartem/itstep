import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Coment, CommentService, PostService, UserService } from 'src/app/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  commentForm:FormGroup;
  
  @Input() postId:number = 0; comments:Coment[]=[]
  
  
  
  

  constructor(formBuilder:FormBuilder,private userServise:UserService, private postService:PostService, private router:Router, private commentService:CommentService) { 
  this.commentForm = formBuilder.group({
  "data": [new Date(),[Validators.required]],
  "text": ["",[Validators.required]],
    })
  }
  isAuth:boolean = false
  ngOnInit(): void {
    this.userServise.isAuth.subscribe(
      (isAuth) => {
        this.isAuth = isAuth;
      }
    );  
  }
  /*@Output()
  onKeyUp = new EventEmitter<{date:Date, text:string, name:string}>(); */
  @Output()
 refData = new EventEmitter<{id:number, postId:number,date:Date, userId:number,text:string}>()
  addComment():void{
    if(this.isAuth == false){
      return
    }
     let comment:Coment = {
       id: this.commentService.getNewCommentId(),
       postId: this.postId ,
      date: this.commentForm.value.data, 
      userId: this.userServise.getCurrentId(),
      text: this.commentForm.value.text, 
     };
    
     
     this.commentForm.reset()
     //this.comments = this.commentService.getByPost(this.postId)
     this.refData.emit(comment);
     console.log(this.comments)
    }
}
