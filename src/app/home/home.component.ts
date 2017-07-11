import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';

// import { AppService } from '../app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  data;
  constructor() {

  }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('product'));
    console.log(this.data);
  }
  onClicked(value){
    console.log("change value",value);
  }
//   logout():void{
//     this.auth.logout();
//   }
 }
