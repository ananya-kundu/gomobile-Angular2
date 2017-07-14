

import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { AppService } from '../app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css']
    styles:[`input.ng-invalid{border-left:5px solid red;}
              input.ng-valid{border-left:5px solid green;}`],
    providers: [AppService]

})
export class LoginComponent implements OnInit {
    loginForm : FormGroup;
    posts: any = [];

    //creating instance with ES6 syntax
    constructor(private _formBuilder : FormBuilder,public http: Http, private router: Router,private appService: AppService){
      //  url = "";

    }
    ngOnInit(){
      this.loginForm = this._formBuilder.group({
        email : [" ",[Validators.required]],
        password : [" ",[Validators.required]]
      })
    }

  onSubmit(){
    console.log(this.loginForm.value);
    this.appService.loginData(this.loginForm.value).subscribe(posts => {
      console.log("posts",posts);
      this.posts = posts.json();
      if(this.posts.result.success == true){
          let product = JSON.stringify(this.posts.data);
          localStorage.setItem('product',product);
          this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/login']);
    }


  });
  }
}




  //model creation for Model driven
  // loginForm = new FormGroup({
  //   email : new FormControl(" ",Validators.required),
  //   password: new FormControl(null, [Validators.compose([Validators.required,Validators.minLength(4)])])
  //
  // });
  //
/**Templete driven*/
// export class LoginComponent {
//
//   data = {};
//   formLogin(){
//     console.log(this.data);
//   }
//
// }



// export class LoginComponent implements OnInit {
//
//   constructor() { }
//
//
//   ngOnInit() {
//   }
//
// }
