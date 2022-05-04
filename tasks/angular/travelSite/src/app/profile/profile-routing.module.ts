import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ProfileComponent } from "./profile.component";


const routes: Routes = [
    {
        path:"", component: ProfileComponent, pathMatch: 'full'
    },
    {
        path:":id", component: ProfileComponent, pathMatch: 'full'
    },
    {
        path:"edit/:id", component: EditProfileComponent, pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule { }