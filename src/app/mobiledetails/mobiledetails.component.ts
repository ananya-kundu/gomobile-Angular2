import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager,ToastOptions } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-mobiledetails',
  templateUrl: './mobiledetails.component.html',
  styleUrls: ['./mobiledetails.component.css'],
  // providers: []
})
export class MobiledetailsComponent implements OnInit {
  mobiledata:any;

  public addCartArray = new Array();
  public localCartItem ;
  public addCart;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,public toastColor: ToastOptions) {
    //  this.toastr.setRootViewContainerRef(vcr);
    // this.toastColor .animate='fade';
 }


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
        // console.log("log if");
        return ;
      }
      alert('Product added');
      //  this.toasterService.info('any');
      // this.toastr.info('Hi..');
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
