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

  public prodObj = {
    manufacturer : [],
    storage : [],
    os : [],
    camera : []
  }

  public prodArray = new Array();
  nextData : any;

  constructor(private router: Router) {}

  ngOnInit() {
    if(localStorage.getItem('product')){
      console.log("hii");
      // this.router.navigate(['/login']);
    }
    else{
        this.router.navigate(['/login']);
    }
    this.data = JSON.parse(localStorage.getItem('product'));
    console.log(this.data);
    // this.nextData = this.data;

  }
  productDetails(prod:any){
    console.log("prod",prod);
    let prodNew = JSON.stringify(prod);
    localStorage.setItem('productnew',prodNew);

  }

  onClicked(value:any){
    if(value.clear){
      this.prodObj = {
        manufacturer : [],
        storage : [],
        os : [],
        camera : []
      }
    }
    else{
      if (value.checked) {
        this.prodObj[value.title].push(value.content);
      }
      else {
        let remove = this.prodObj[value.title].indexOf(value.content);
        this.prodObj[value.title].splice(remove, 1);
      }
    }




  this.nextData = this.data;

    var self = this;
    this.keyValue = this.nextData.filter(function(mobileObj){
      let manufacturerFlag = true,storageFlag = true,cameraFlag = true,osFlag = true;
      if(self.prodObj.manufacturer.length>0)
        manufacturerFlag = (self.prodObj.manufacturer.indexOf(mobileObj.specs.manufacturer)>-1)
      if(self.prodObj.storage.length>0)
        storageFlag = (self.prodObj.storage.indexOf(mobileObj.specs.storage)>-1)
      if(self.prodObj.camera.length>0)
        cameraFlag = (self.prodObj.camera.indexOf(mobileObj.specs.camera)>-1)
      if(self.prodObj.os.length>0)
        osFlag = (self.prodObj.os.indexOf(mobileObj.specs.os)>-1)
    return (manufacturerFlag && storageFlag && cameraFlag && osFlag);
    });

          console.log(this.keyValue);
          this.nextData = this.keyValue;
          console.log(this.nextData);


        }

      }











// this.keyValue = value;
//
//
//
// this.prodObj[value.title].push(value.content);
//
// if(value.title == value.firstTitle){
//   console.log("iffff");
//   this.nextData = this.data;
//   for(let x in this.nextData){
//     var des = this.nextData[x].specs[value.title];
//     console.log("des:",des,[value.title]);
//
//     let newVal ;
//      var a = this.prodObj[value.title];
//         for(let y in this.prodObj[value.title]){
//            var filterdes = a[y];
//           //  console.log("filterdes",filterdes);
//
//            if(filterdes == des){
//              console.log("comparison");
//
//              let cmp = this.nextData[x];
//              this.prodArray.push(cmp);
//              console.log("comparison",this.prodArray);
//                 this.prodArray = this.prodArray.filter(function(elem, index, self) {        //it is for duplicate element remove i.e. search unique value
//                     return index == self.indexOf(elem);
//                   })
//               this.uniqueVal = this.prodArray;
//               console.log("new array1",this.uniqueVal);
//
//             }
//         }
//         // this.nextData = this.uniqueVal;
//       }
// }
//
//
//
//
//     if(value.title == value.secondTitle){
//       console.log("this.uniqueVal",this.uniqueVal);
//       for(let x in this.uniqueVal){
//         var des = this.uniqueVal[x].specs[value.title];
//         console.log("des:",des,[value.title]);
//
//         let newVal ;
//          var a = this.prodObj[value.title];
//             for(let y in this.prodObj[value.title]){
//                var filterdes = a[y];
//               //  console.log("filterdes",filterdes);
//
//                if(filterdes == des){
//                  console.log("comparison");
//
//                  let cmp = this.nextData[x];
//                  this.prodArray.push(cmp);
//                  console.log("comparison",this.prodArray);
//                     this.prodArray = this.prodArray.filter(function(elem, index, self) {        //it is for duplicate element remove i.e. search unique value
//                         return index == self.indexOf(elem);
//                       })
//                   this.secondUniqueVal = this.prodArray;
//                   console.log("new array1",this.secondUniqueVal);
//
//                 }
//             }
//           }
//
//     }
//
// }
  // clearAll(){
  //        this.prodObj = {
  //          manufacturer:[],
  //          storage:[],
  //          os:[],
  //          camera:[]
  //        };
  //        this.setProperty(this.prodObj);
  //    }


//   logout():void{
//     this.auth.logout();
//   }
