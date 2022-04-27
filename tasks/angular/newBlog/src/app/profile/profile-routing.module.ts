import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProfileResolverService } from './profile-resolver.service';
import { ProfileComponent } from './profile.component';
import { ProfileModule } from './profile.module';

const routes: Routes = [

{
  path:"", component:ProfileComponent
},
{
  path: ":id", component:ProfileComponent , resolve: {user: ProfileResolverService}
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
