import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Interpolation/demo/demo.component';
import { ViewComponent } from './Property-Binding/view/view.component';
import { ViewCustomerComponent } from './Interpolation/view-customer/view-customer.component';
import { CustomerComponent } from './property-Binding/customer/customer.component';
import { EventdemoComponent } from './Eventbinding/eventdemo/eventdemo.component';
import { Demo1Component } from './Twowaybinding/demo1/demo1.component';
import { Demo2Component } from './TwoWaybinding/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewComponent,
    ViewCustomerComponent,
    CustomerComponent,
    EventdemoComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Demo2Component]
})
export class AppModule { }
