import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
submitted:boolean;
  constructor(private frombuilder:FormBuilder){
   }

  ngOnInit() {
    this.loginForm=this.frombuilder.group({uname:['',Validators.required],pwd:['',Validators.required]});
  }
  onSubmit(){
    this.submitted=true;
    if(!this.loginForm.invalid)
    {return;}
    else{alert("form is invalidate");}
  }
  get f(){return this.loginForm.controls;}
  onReset(){
    this.submitted=false;
    this.loginForm.reset();
  }

}
