import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SingUpComponent } from './sing-up/sing-up.component';



@NgModule({
  declarations: [
    AuthComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
