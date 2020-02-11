import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Task } from '../task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  list:Task[]=[];
task:string;
priorty:number;
parenttask:string;
startdate:Date;
enddate:Date;
task1:string=null;
item:Task;
  constructor(private route:Router) {
    
  }

  ngOnInit() {
  }
  public AddTask(){
    this.item=new Task;
    this.item.Task=this.task;
    this.item.priority=this.priorty;
    this.item.parenttask=this.parenttask;
    this.item.startdate=this.startdate;
    this.item.enddate=this.enddate;
  if(localStorage.getItem("listdata"))
  {
    this.list=JSON.parse(localStorage.getItem("listdata"));
  }
  this.list.push(this.item);
  localStorage.setItem("listdata",JSON.stringify(this.list));
} 

    }


