import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
//import { AdminGuard } from './core/guard/admin.guard';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path:"home",
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
},
{
  path:"post",
  loadChildren: () => import('./post/post.module').then(mod => mod.PostModule)
},
{
  path:"profile",
  loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)
},
{
  path:"user",
  loadChildren: () => import('./user/user.module').then(mod => mod.UserModule), 
  //canActivate:[AdminGuard]
},
{
  path:"sign",
  loadChildren:() => import('./auth-module/auth-module.module').then(mod => mod.AuthModuleModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    } 

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
