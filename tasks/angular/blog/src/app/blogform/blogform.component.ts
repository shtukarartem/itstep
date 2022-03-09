import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})
export class BlogformComponent {
date: Date = new Date();
title:string="";
text:string="";
preview:string = "";
user:string = "";
@Output()

onSent = new EventEmitter<Blog>();

 addBlog():void{
   if(this.title == "" || this.text == ""|| this.preview == "" || this.user == "")
   return;

   let blog = new Blog(this.title,this.date,this.user,this.preview,this.text);
   console.log(blog)
   this.onSent.emit(blog);

   this.date = new Date();
  this.title="";
  this.text="";
  this.preview = "";
  this.user = "";
 }

}
