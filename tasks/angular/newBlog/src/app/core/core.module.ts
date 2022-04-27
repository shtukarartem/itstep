import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, PostService, CommentService  } from './service';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[UserService,PostService,CommentService,AuthGuard, AdminGuard]
})
export class CoreModule { }
