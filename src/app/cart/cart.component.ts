import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartArray = new Array();
  sum = 0;


  constructor(private router: Router) { }

  ngOnInit() {

    console.log(JSON.parse(localStorage.getItem('addToCartStorage')));

    this.cartArray = JSON.parse(localStorage.getItem('addToCartStorage'));
    console.log(this.cartArray);

    for(let m in this.cartArray){
      this.sum = this.sum + this.cartArray[m].price;
      console.log(this.sum);
    }

  }

  remove(p){
    var cartid = this.cartArray.indexOf(p);
    this.cartArray.splice(cartid,1);
    console.log(cartid);
    // this.cartArray = JSON.parse(localStorage.getItem('addToCartStorage'));
     let updatedPrice = JSON.stringify(this.cartArray);
     localStorage.setItem('addToCartStorage',updatedPrice);
     this.sum = this.sum - p.price;
    //  window.location.reload();



  }
  }
