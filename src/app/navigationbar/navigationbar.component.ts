import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { RouterModule, Routes ,Router} from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor(public appservice:AppService,private router:Router) { }

  ngOnInit() {

  }


logout(){
    let data={data:"data"};
    localStorage.removeItem('product');         
    this.router.navigate(['/login']);
}

}
