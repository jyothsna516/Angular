import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string;
pwd:string;
errmsg:string;
  constructor(private route:Router) { 

  }

  ngOnInit() {
  }
  public validate(){
 if(this.uname=="jyo"&&this.pwd=="123"){sessionStorage.setItem("un",this.uname)
 this.route.navigateByUrl('user');//user is the name of the route
  }
 else{
   this.errmsg="invalid login details";
 }
  }

}
