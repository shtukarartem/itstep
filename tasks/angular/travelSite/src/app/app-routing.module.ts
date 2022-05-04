import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"home",
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path:"sign-in",
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path:"profile",
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)
  },
  {
    path:"user",
    loadChildren: () => import('./user/user.module').then(mod => mod.UsersModule)
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
