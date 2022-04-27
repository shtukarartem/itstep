import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';
import { PostService } from './service/post.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    UserService,
    PostService
  ]
})
export class CoreModule { }
