import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailUserComponent } from "./detail-user/detail-user.component";
import { EditlUserComponent } from "./editl-user/editl-user.component";
import { FormUserComponent } from "./form-user/form-user.component";
import { UserComponent } from "./user.component";


const routes: Routes = [
    {
        path:"", component: UserComponent, pathMatch: 'full'
    },
    {
        path:"create", component: FormUserComponent, pathMatch: 'full'
    },
    {
        path:"edit/:id", component: EditlUserComponent, pathMatch: 'full'
    },
    {
        path:":id", component: DetailUserComponent, pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }