import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthModuleComponent } from './auth-module.component';
import { AuthModuleModule } from './auth-module.module';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';


const routes: Routes = [

{path:"", component:AuthModuleComponent, pathMatch:'full'},
{path:"signin", component:SingInComponent, pathMatch:'full'},
{path:"signup", component:SingUpComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
