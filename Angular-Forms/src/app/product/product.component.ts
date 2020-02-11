import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
RegisterForm:FormGroup;
submitted:boolean;
  constructor( private formbuilder:FormBuilder){

  }

  ngOnInit() {
    this.RegisterForm=this.formbuilder.group({pid:['',Validators.required],pname:['',Validators.required],
    price:['',Validators.required],stock:['',Validators.required]});}

  onSubmit(){
    this.submitted=true;
    if(!this.RegisterForm.invalid){
      return;
    }
    else{alert("form is invalidate");}
  }
  get f(){
    return this.RegisterForm.controls;
  }
  onReset(){
    this.submitted=false;
    this.RegisterForm.reset();

  }

}
