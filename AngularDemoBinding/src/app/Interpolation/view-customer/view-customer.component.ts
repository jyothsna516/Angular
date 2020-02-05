import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  obj1:Customer;


  constructor() { 
    this.obj1={ CName:'jyo' ,Email:"jyo@gmail.com",Mobile:"5717687678",City:"tnk",Address:"suntech park"};
  }

  ngOnInit() {
  }

}
