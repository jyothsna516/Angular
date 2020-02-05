import { Component, OnInit } from '@angular/core';
import{Customer} from'src/app/Models/customer'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  item:Customer
  constructor() { 
    this.item =new Customer;
    this.item.CName="jyo";
    this.item.City="tnk";
    this.item.Email="jyo@gmail.com";
    this.item.Mobile="4656576786";
    this.item.Address=" asv suntech park";

  }
  ngOnInit() {
  }

}
