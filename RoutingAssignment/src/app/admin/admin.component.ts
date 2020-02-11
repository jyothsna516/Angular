import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
uname:string;
  constructor(private route:Router) { if(sessionStorage.getItem("un")){
    this.uname=sessionStorage.getItem("un");
}
else{this.route.navigateByUrl('login');}}

  ngOnInit() {
  }
  public Logout(){
    sessionStorage.clear();
  this.route.navigate(['login']);
  } }

 


