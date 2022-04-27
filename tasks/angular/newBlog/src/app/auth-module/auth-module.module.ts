import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthModuleComponent } from './auth-module.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SingInComponent,
    SingUpComponent,
    AuthModuleComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModuleModule { }
