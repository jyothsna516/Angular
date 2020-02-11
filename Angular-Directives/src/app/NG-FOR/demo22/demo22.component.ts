import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-demo22',
  templateUrl: './demo22.component.html',
  styleUrls: ['./demo22.component.css']
})
export class Demo22Component implements OnInit {
list:Student[]=[];
sid:number;
sname:string;
age:number;
std:string;
item:Student;
stds:string[]=['i','ii','iii'];
val:boolean=true;
  constructor() { 
    this.list=[{sid:1,sname:'jyo',std:'ii',age:12},
    {sid:2,sname:'sai',std:'ii',age:15},
    {sid:3,sname:'ram',std:'ii',age:19},
    {sid:4,sname:'sowmya',std:'ii',age:20} ]
  }

  ngOnInit() {
  }
  public Add(){
    this.item=new Student();
    this.item.sid=this.sid;
    this.item.sname=this.sname;
    this.item.age=this.age;
    this.item.std=this.std;
    this.list.push(this.item)//add item to array
  }
  public setval(){
    this.val=!this.val;
  }

}
