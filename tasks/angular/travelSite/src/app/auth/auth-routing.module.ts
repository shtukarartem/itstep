import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SingUpComponent } from "./sing-up/sing-up.component";



const routes: Routes = [
    {
        path:"", component: AuthComponent, pathMatch: 'full'
    },
    {
        path:"singup", component: SingUpComponent, pathMatch: 'full'
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }