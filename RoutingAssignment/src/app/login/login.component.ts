import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string;
pwd:string
  constructor(private route:Router) 
  { }

  ngOnInit() {
  }
  public Login(){
    if(this.uname=="jyo"&&this.pwd=="123"){sessionStorage.setItem("un",this.uname),
      this.route.navigateByUrl('buyer');
  }
  else if(this.uname=="sai"&&this.pwd=="155"){sessionStorage.setItem("un",this.uname),
    this.route.navigateByUrl('seller');
}
else if(this.uname=="sowmya"&&this.pwd=="159"){sessionStorage.setItem("un",this.uname),
  this.route.navigateByUrl('admin');
}

     
  }


}
