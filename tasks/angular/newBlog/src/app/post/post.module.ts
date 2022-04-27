import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { FormPostComponent } from './form-post/form-post.component';
import { RouterModule } from '@angular/router';
import { PostRoutingModule } from './post-routing.module';
import { PostService } from '../core';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentResolverService } from './detail-post/comment-resolver.service';
import { CommentFormComponent } from './detail-post/comment-form/comment-form.component';



@NgModule({
  declarations: [
    PostComponent,
    FormPostComponent,
    DetailPostComponent,
    CommentFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PostRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    CommentResolverService
  ]
})
export class PostModule { }
