import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth-module/auth-routing.module';
import { CoreModule } from './core/core.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeadderComponent } from './shared/layout/headder/headder.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
