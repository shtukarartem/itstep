import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogsvService } from '../blogsv.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private service:BlogsvService){
    this.blog = 
    {id:0,
    title:"", 
    date: new Date(), 
    user:"",
    preview:"",
    img:"https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg",
    text:"",
    favorite:false};
  }
  ngOnInit():void{

  }


 @Input()
 blog: Blog
 
addFav(){
  let blogs: Blog[] = this.service.getData();
  let index = blogs.indexOf(this.blog);
  if(index !== -1)
  blogs[index].favorite = !blogs[index].favorite
  //this.service.addFavorite(blog);
}

}
