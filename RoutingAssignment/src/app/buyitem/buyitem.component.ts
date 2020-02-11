import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-buyitem',
  templateUrl: './buyitem.component.html',
  styleUrls: ['./buyitem.component.css']
})
export class BuyitemComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
 
}
