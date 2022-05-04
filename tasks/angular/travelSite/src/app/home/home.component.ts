import { Component, OnInit } from '@angular/core';
import { Post, PostService, UserService } from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private postService:PostService, private userService:UserService) { }

  posts:Post[] = []

  ngOnInit(): void {
    this.postService.get().subscribe(
      ((data)=> this.posts = data)
    )
  }

}
