import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogsvService } from '../blogsv.service';

@Component({
  selector: 'app-full-blog',
  templateUrl: './full-blog.component.html',
  styleUrls: ['./full-blog.component.scss']
})
export class FullBlogComponent implements OnInit {
  blog:any;
private BlogSubscription: Subscription;

  constructor(private route:ActivatedRoute, private blogService:BlogsvService) { 
    this.BlogSubscription = route.params.subscribe(
      params => this.blog = blogService.getById(params['id'])
    )
  }

  ngOnInit(): void {
  }

}
