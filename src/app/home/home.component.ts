import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';
import { PipesPipe } from '../pipes.pipe';

// import { AppService } from '../app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  data;
  keyValue : any;
  constructor() {

  }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('product'));
    console.log(this.data);
  }
  onClicked(value){
    this.keyValue = value;
    console.log("change value",value);
  }
  productDetails(prod:any){
    console.log("prod",prod);
    let prodNew = JSON.stringify(prod);
    localStorage.setItem('productnew',prodNew);

  }


//   logout():void{
//     this.auth.logout();
//   }
 }
