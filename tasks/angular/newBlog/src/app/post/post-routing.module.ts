import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { CommentResolverService } from './detail-post/comment-resolver.service';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { FormPostComponent } from './form-post/form-post.component';
import { PostComponent } from './post.component';
import { PostModule } from './post.module';

const routes: Routes = [

{path:"", component:PostComponent, pathMatch:'full'},
{path:"add", component:FormPostComponent, pathMatch:'full',  canActivate:[AuthGuard]},
{path:":id", component:DetailPostComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
