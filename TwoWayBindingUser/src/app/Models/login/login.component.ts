import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  obj:Login;
  res:string;
  constructor() { 
    this.obj=new Login();
    
  }
  public Validation(t1:string,t2:string){
    if(t1=="Admin"&&t2=="12345"){
this.res="login sucess";
    }
    else{
      this.res="login fail";
      //console.log("this.fail");
    }
  }

  ngOnInit() {
  }

}
