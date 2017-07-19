import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

    public key = {
      Manufacturer:[],
      Storage:[],
      Os:[],
      Camera:[]
    };



  transform(feature: any[], filterKey?:any): any {
    console.log("bhjhkjk",filterKey);
    if (filterKey == undefined){
      console.log("filterKey");
      return feature;

    }
    console.log(typeof filterKey);
    return filterKey;
  }
}
