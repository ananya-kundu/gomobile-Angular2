import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiledetails',
  templateUrl: './mobiledetails.component.html',
  styleUrls: ['./mobiledetails.component.css']
})
export class MobiledetailsComponent implements OnInit {
  mobiledata:any;

  public addCartArray = new Array();
  public localCartItem ;
  public addCart;

  constructor() { }


  ngOnInit() {
    console.log("abjgb");
    this.mobiledata = JSON.parse(localStorage.getItem('productnew'));
    console.log("get",this.mobiledata);
  }

addToCart(mobiledata){

  if(localStorage.getItem('addToCartStorage')){
    console.log("if");
    this.localCartItem = JSON.parse(localStorage.getItem('addToCartStorage'));
    this.addCartArray = this.localCartItem;
    for(let x in this.addCartArray){
      console.log("log for");

      if(this.addCartArray[x].id == mobiledata.id){
        console.log("log if");
        return ;
      }
      }

      this.addCartArray.push(mobiledata);
       console.log("cart",this.addCartArray);
       this.addCart = JSON.stringify(this.addCartArray);
       localStorage.setItem('addToCartStorage',this.addCart);



  }else{
    console.log("else");
    this.addCartArray.push(mobiledata);
     console.log("cart",this.addCartArray);
     this.addCart = JSON.stringify(this.addCartArray);
     localStorage.setItem('addToCartStorage',this.addCart);
  }

}



}
