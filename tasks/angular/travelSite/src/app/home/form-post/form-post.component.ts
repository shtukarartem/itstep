import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService, UserService } from 'src/app/core';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

postForm:FormGroup

  constructor(private postService:PostService, formBuilder:FormBuilder, private router:Router, private userService:UserService) {
    this.postForm = formBuilder.group({
      "title":["",[Validators.required]],
      "date":["",[Validators.required]],
      "preview":["",[Validators.required]],
      "img":["",[Validators.required]],
      "text":["",[Validators.required]],
    })
   }

  ngOnInit(): void {
  }
addBlog(){

  let data = {
      
   title: this.postForm.value.title, 
   date: this.postForm.value.data, 
   userId: this.userService.getCurrentId(), 
   preview: this.postForm.value.preview, 
   text: this.postForm.value.text, 
   img: this.postForm.value.img, 
   users: []
};
this.postService.create(data).subscribe();
this.postForm.reset()
this.router.navigate(["/home"]);
}
}
