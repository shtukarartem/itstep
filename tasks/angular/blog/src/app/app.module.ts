import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogformComponent } from './blogform/blogform.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { BlogsvService } from './blogsv.service';
import { HeaderComponent } from './header/header.component';
import { FullBlogComponent } from './full-blog/full-blog.component';

let routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"form", component: BlogformComponent},
  {path: "list/:id", component:FullBlogComponent},
  {path: "list", component: BloglistComponent},
  {path: "**", component: NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogformComponent,
    BloglistComponent,
    NotfoundComponent,
    HomeComponent,
    HeaderComponent,
    FullBlogComponent,

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: [BlogsvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
