import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoStrDir';
  Customer:any[]=[{"name":'jyo',"country":'india',"age":19},
                  {"name":'renu',"country":'india',"age":20},
                  {"name":'sai',"country":'india',"age": 21}];
  StudentbyCountry:any[]=[
    {
    "country":"india",
    "student":[{"name":"jyo","age":20},{"name":"sai","age":21}]},
    {"country":"USA",
    "student":[{"name":"jyo","age":20},{"name":"sai","age":21}]}]}
                 

