import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post, PostService, User, UserService } from 'src/app/core';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {
  postForm:FormGroup;
  users:User[]=[];
  posts:Post[]=[];
  constructor(formBuilder:FormBuilder,private userServise:UserService, private postService:PostService, private router:Router) { 
  this.postForm = formBuilder.group({
  "title": ["",[Validators.required, Validators.minLength(10)]],
  "preview": ["",[Validators.required]],
  "data": [new Date(),[Validators.required]],
  "text": ["",[Validators.required]],
    })

  }

  ngOnInit(): void {
    this.userServise.get().subscribe(
      ((data) => this.users = data)
    );
    this.postService.get().subscribe(
      ((data) => this.posts = data)
    )
  }
  addBlog():void{
    let newId;

   /* if(posts.length == 0)
        newId = 1;
    else
        newId = posts[posts.length - 1].id + 1;*/
  
     let data = {
      
       title: this.postForm.value.title, 
      date: this.postForm.value.data, 
      userId: this.userServise.getCurrentId(), 
      preview: this.postForm.value.preview, 
      text: this.postForm.value.text, 
      img:"https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg", 
      favorite:false};
     console.log(data)
    this.postService.create(data).subscribe();
  
     this.postForm.reset()
     this.router.navigate(["/post"]);
   }
}
