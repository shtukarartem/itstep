import { Component, Input, OnInit } from '@angular/core';
import { Post, PostService, UserService } from '../core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private postService:PostService, private userService: UserService) { }

    posts:Post[] = [];



    /*this.post = {
      id:0,
      title:"",
    date: new Date(),
    userId:0,
    preview:"",
    text:"",
    favorite:false,
    img:"https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg"
    }*/
  


  ngOnInit(): void {
    this.postService.get().subscribe(
      ((data) => this.posts = data)
    )
  }
    /*subscripe(
      (data) => {this.posts = data;
      this.posts.forEatch(function(post){
        this.userService.getById(post.userId).subscribe(
      (data) => this.name =data.name
    )
      })}
    );

    

  }

  getUserName(userId:number):string{
    return 
  }*/

}
