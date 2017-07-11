import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

import {Http, Response, Request, RequestMethod} from '@angular/http';
import { AppService } from '../app.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  // styleUrls: ['./signup.component.css']
  styles:[`input.ng-invalid{border-left:5px solid red;}
            input.ng-valid{border-left:5px solid green;}`],
  providers: [AppService]
})



export class SignupComponent implements OnInit {
    signupForm : FormGroup;
    posts: any = [];
    //creating instance with ES6 syntax
    constructor(private _formBuilder : FormBuilder,public http: Http, private router: Router,private appService: AppService){

    }
    ngOnInit(){
      this.signupForm = this._formBuilder.group({
        username : ["",[Validators.required]],
        mobileno : ["",[Validators.required]],
        email : ["",[Validators.required]],
        password : ["",[Validators.required]]
      })
    }

  onSubmit(){
    console.log("signup.ts");
    console.log(this.signupForm.value);

      this.appService.signupData(this.signupForm.value).subscribe(posts => {
      this.posts = posts;
    });
    }
  }







// export class SignupComponent {
//
//   data = {};
//   formSignup(){
//     console.log(this.data);
//   }
//
// }




// export class SignupComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
//
// //
// export class SignupComponent implements OnInit {
//     SignupForm : FormGroup;
//
//     //creating instance with ES6 syntax
//     constructor(private _formBuilder : FormBuilder){
//
//     }
//     ngOnInit(){
//       this.signupForm = this._formBuilder.group({
//         username : ["",[Validators.required]],
//         mobileno : ["",[Validators.required]],
//         email : [" ",[Validators.required]],
//         password : [" ",[Validators.required]]
//         // password: [null,[Validators.compose([Validators.required,Validators.minLength(4)])]]
//       })
//     }
//
//   onSubmit(){
//     console.log(this.signupForm.value);
//   }
// }
