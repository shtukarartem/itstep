import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { FormPostComponent } from './form-post/form-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailPostComponent,
    FormPostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
