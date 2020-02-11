import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component implements OnInit {
items:any[]=[
  {name:'one',val:1},
  {name:'two',val:2},
  {name:'three',val:3}
];
selectedValue:string='one';

  constructor() { }

  ngOnInit() {
  }

}
