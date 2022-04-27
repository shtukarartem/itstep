import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUserComponent } from './form-user/form-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from '../core';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    UserComponent,
    FormUserComponent,
    UserDetailComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ReactiveFormsModule,

  ],
  providers:[]
})
export class UserModule { }
