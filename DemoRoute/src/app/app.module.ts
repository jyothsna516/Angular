import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './myDemo/firstpage.component';
import { SecondPageComponent } from './myDemo/secondpage.component';
const appRoutes:Routes=[
  {path:"secondpage",component:secondpageComponent},
  {path:"firstpage",component:FirstPageComponent},
  {path:" ",redirectTo:"app-root",component:AppComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
