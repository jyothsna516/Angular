import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {
name:string;
num1:number;
num2:number;
Add:number;
sub:number;
res:number;
  constructor() { }

  ngOnInit() {
  }
  public setName(){
    this.name="jyo";
  }
  public Greet(val:string){
    this.name=val;
  }
  public Addition(val1:number,val2:number){
    this.num1=val1;
    this.num2=val2;
    this.res=Number(val1)+Number(val2);
    return this.res;
    

  }
  public  Subtraction(val1:number,val2:number){
    this.num1=val1;
    this.num2=val2;
    this.res=Number(val1-val2);
    return this.res;

  }

}
