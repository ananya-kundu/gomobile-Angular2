import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { RouterModule, Routes ,Router} from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  cartCount;
  count;
  constructor(public appservice:AppService,private router:Router) { }

  ngOnInit() {
    this.cartCount = JSON.parse(localStorage.getItem('addToCartStorage'));
    console.log(this.cartCount);
    this.count = this.cartCount.length;

  }


logout(){
    let data={data:"data"};
    localStorage.removeItem('product');
    this.router.navigate(['/login']);
}

}
