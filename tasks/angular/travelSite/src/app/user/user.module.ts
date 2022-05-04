import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { EditlUserComponent } from './editl-user/editl-user.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    FormUserComponent,
    DetailUserComponent,
    EditlUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
