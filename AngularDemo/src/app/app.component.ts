import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = null;
  num:number=20;
  imagepath:string='assets/images/flower.jpg' 
  fname:string="ram";
  lname:string="ch";
  isdisabled:boolean=false;
  mystyle:string="boldclass italicclass"
  applystyle:string="italic class"
  getname():string{
    this.fname=this.fname.toUpperCase()
    return this.fname+" "+this.lname;
  }
}
