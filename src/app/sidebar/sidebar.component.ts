import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [AppService]
})
export class SidebarComponent implements OnInit {
        @Input() result:string="";

        feature:Array<any>;
        isChecked;


        @Output() clicked=new EventEmitter<string>();

        constructor(private appService: AppService) {
              this.feature = this.appService.getFeature();
              // console.log( this.feature);
            }

  ngOnInit() { }

  clearAll(){
    console.log("clearAll");
      for(let title in this.feature){
        for (let subTitle in this.feature[title].name){

          var subTit = this.feature[title].name[subTitle];
          if ((<HTMLInputElement>document.getElementById(subTit)).checked === true) {
            (<HTMLInputElement>document.getElementById(subTit)).checked = false;
              }

            // var clear = true;
            let objFilter:any = {
              clear : true
            }
              this.clicked.emit(objFilter);
      }
}
}


changeValue(title,fea){


    if ((<HTMLInputElement>document.getElementById(fea)).checked === true) {
          // console.log("checked");
          this.isChecked=true;
        }
    if ((<HTMLInputElement>document.getElementById(fea)).checked === false) {
              // console.log("unchecked");
              this.isChecked=false;
        }


  let objFilter:any = {
      title : title,
      content : fea,
      checked:this.isChecked,
      clear : false

  };
    this.clicked.emit(objFilter);
  }
}


//
// import {Component} from '@angular/core';
// import { SharedataService } from '../services/sharedata.service';
//
// @Component({
//     selector: 'app-sidebar',
//     templateUrl: './sidebar.component.html',
//     styleUrls: ['./sidebar.component.css'],
//     providers : [ SharedataService ]
// })
//
// export class sidebarComponent {
//
//    constructor (private share:SharedataService) {}
//    public data = [
//         {
//           head: 'manufacturer',
//           content: ['Apple', 'Samsung', 'HTC', 'Nokia', 'Sony']
//         },
//         {
//           head: 'storage',
//           content: ['16', '32']
//         },
//         {
//           head: 'os',
//           content: ['Android', 'iOS', 'Windows']
//         },
//         {
//           head: 'camera',
//           content: ['5', '8', '12', '15']
//         }
//    ];
//
//     public pp = {
//       manufacturer:[],
//       storage:[],
//       os:[],
//       camera:[]
//     };
//
//     getProperty(filter){
//       return this.pp[filter];
//     }
//
//     setProperty(value){
//       this.share.setData(JSON.stringify(value));
//     }
//
//     checkedC(filter,val){
//         let key = this.getProperty(filter);
//         if ((<HTMLInputElement>document.getElementById(val)).checked === true) {
//             key.push(val);
//         }
//         else{
//             if ((<HTMLInputElement>document.getElementById(val)).checked === false) {
//                 let uncheck = key.indexOf(val);
//                 key.splice(uncheck,1);
//             }
//         }
//         this.setProperty(this.pp);
//     }
//     clearAll(){
//         this.pp = {
//           manufacturer:[],
//           storage:[],
//           os:[],
//           camera:[]
//         };
//         this.setProperty(this.pp);
//     }
// }
