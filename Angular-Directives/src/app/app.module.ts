import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './NG_IF/demo1/demo1.component';
import { Demo11Component } from './NG-FOR/demo11/demo11.component';
import { Demo22Component } from './NG-FOR/demo22/demo22.component';
import { Demo33Component } from './NG-FOR/demo33/demo33.component';
import { Demo4Component } from './NG-FOR/NG_SWITCH/demo4/demo4.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo11Component,
    Demo22Component,
    Demo33Component,
    Demo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Demo22Component]
})
export class AppModule { }
