import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogsvService } from '../blogsv.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  blogs: Blog[] = [];
 
  constructor(private blogService: BlogsvService){}

ngOnInit(){
  this.blogs = this.blogService.getData();
}



}
