import { Component, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

 @Input()
 blog: Blog = new Blog("",new Date,"","","");
 


}
