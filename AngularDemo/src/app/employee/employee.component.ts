import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
firstName:string="jyo";
lastName:string="ch";
Email:string="jyo@Ggmail.com"
Age:number=12;
getStyle(){
  let styles={"font-style":"italic","color":"brown"};
  return styles;
}
 
  }


