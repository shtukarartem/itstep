import { Component, OnInit } from '@angular/core';
import { BlogsvService } from './blogsv.service';
import { Blog } from './blog.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BlogsvService]
})
export class AppComponent implements OnInit {
  
  blogs: Blog[] = [];
  constructor(private blogsvService: BlogsvService){}

  ngOnInit(){
    this.blogs = this.blogsvService.getData();
  }
  addBlog(blog:any):void{
    this.blogsvService.addData(blog);
    console.log(blog)
  }
}
