import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FormUserComponent } from './form-user/form-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user.component';
import { UserModule } from './user.module';
import { AdminGuard } from '../core/guard/admin.guard';


const routes: Routes = [

{path:"", component:UserComponent,canActivate:[AdminGuard]},
{path:"create", component: FormUserComponent},
{path: "edit/:id", component: EditComponent},
{path: ":id", component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
