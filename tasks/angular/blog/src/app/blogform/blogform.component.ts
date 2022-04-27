import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../blog.model';
import { BlogsvService } from '../blogsv.service';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss'],
})
export class BlogformComponent implements OnInit {
  
  users:string[] = [];
  blogForm: FormGroup;

constructor(private formBuilder: FormBuilder, private blogsvService: BlogsvService ){

this.blogForm = formBuilder.group({
  "title": ["",[Validators.required, Validators.minLength(10)]],
  "preview": ["",[Validators.required]],
  "user": [this.users[0],[Validators.required]],
  "data": [new Date(),[Validators.required]],
  "text": ["",[Validators.required]],
})

this.users = this.blogsvService.getUsers();
}
ngOnInit(){
  
}

 addBlog():void{
  let newId;
  let blogs = this.blogsvService.getData()
  if(blogs.length == 0)
      newId = 1;
  else
      newId = blogs[blogs.length - 1].id + 1;

   let blog:Blog = {
     id: newId,
     title: this.blogForm.value.title, 
    date: this.blogForm.value.data, 
    user: this.blogForm.value.user, 
    preview: this.blogForm.value.preview, 
    text: this.blogForm.value.text, 
    img:"https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg", 
    favorite:false};
   
  this.blogsvService.addData(blog);

   this.blogForm.reset()
 }

}
