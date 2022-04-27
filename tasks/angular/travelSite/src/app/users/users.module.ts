import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { FormUserComponent } from '../user/form-user/form-user.component';
import { DetailUserComponent } from '../user/detail-user/detail-user.component';
import { EditlUserComponent } from '../user/editl-user/editl-user.component';



@NgModule({
  declarations: [
    UserComponent,
    FormUserComponent,
    DetailUserComponent,
    EditlUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
