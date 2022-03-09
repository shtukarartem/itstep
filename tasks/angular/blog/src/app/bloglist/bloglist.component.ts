import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent {

@Input()
blogs: Blog[] = [];

}
