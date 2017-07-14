import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiledetails',
  templateUrl: './mobiledetails.component.html',
  styleUrls: ['./mobiledetails.component.css']
})
export class MobiledetailsComponent implements OnInit {
  mobiledata:any;
  constructor() { }

  ngOnInit() {
    console.log("abjgb");
    this.mobiledata = JSON.parse(localStorage.getItem('productnew'));
    console.log("get",this.mobiledata);
  }

}
