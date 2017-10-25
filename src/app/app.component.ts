import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  michelle = "Michelle"
  mikey = "Mikey"
  changeMichelle(name:string){
    this.michelle = name
  }
  changeMikey(name:string){
    this.mikey = name
  }
}
