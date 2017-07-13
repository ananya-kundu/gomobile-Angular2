import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';

import 'hammerjs';
// import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PipesPipe } from './pipes.pipe';


const appRoutes : Routes = [
    { path : '' , component : LoginComponent },
    { path : 'signup' , component : SignupComponent },
    { path : 'login' , component : LoginComponent },
    { path : 'home' , component : HomeComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavigationbarComponent,
    SidebarComponent,
    PipesPipe,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),


  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
