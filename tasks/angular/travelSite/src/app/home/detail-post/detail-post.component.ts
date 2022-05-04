import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/core';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {

  constructor(private postService:PostService, private router: Router, private route:ActivatedRoute) { }
post:any
  ngOnInit(): void {
    this.postService.getById(this.route.snapshot.params["id"]).subscribe(
      (data) => this.post = data
    )
  }

}
