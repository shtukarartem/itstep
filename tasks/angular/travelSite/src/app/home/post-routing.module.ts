import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailPostComponent } from "./detail-post/detail-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { FormPostComponent } from "./form-post/form-post.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path:"", component: HomeComponent, pathMatch: 'full'
    },
    {
        path:"create", component: FormPostComponent, pathMatch: 'full'
    },
    {
        path:"edit/:id", component: EditPostComponent, pathMatch: 'full'
    },
    {
        path:":id", component: DetailPostComponent, pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PostRoutingModule { }