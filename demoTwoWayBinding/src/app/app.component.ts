import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoTwoWayBinding';
  Name:string="jyo";
  onclick():void{
    console.log(this.Name);
  }
}
