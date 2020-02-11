import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee';

@Component({
  selector: 'app-demo33',
  templateUrl: './demo33.component.html',
  styleUrls: ['./demo33.component.css']
})
export class Demo33Component implements OnInit {
  item:Employee;
  list:Employee[]=[];
  pid:string;
  pname:string;
  domain:string;
  sdate:Date;
  edate:Date;
  val:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  public AddDetails(){
    this.item= new Employee();
    this.item.pid=this.pid;
    this.item.pname=this.pname;
    this.item.domain=this.domain;
    this.item.sdate=this.sdate;
    this.item.edate=this.edate;
    this.list.push(this.item)
  }
  public hideshow(){
    this.val=!this.val;
  }

}
