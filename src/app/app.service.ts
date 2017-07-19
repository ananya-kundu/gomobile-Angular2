import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
resObj;
  feature : Array<any>;
  constructor(private http: Http) {
    this.feature = [
        { head: 'manufacturer', name: ['Apple','Samsung','HTC','Nokia','Sony'] },
        { head: 'storage', name: [16,32] },
        { head: 'os', name: ['Android','iOS','Windows'] },
        { head: 'camera', name: [5,8,12,15] }
    ];
}


  signupData(obj: Object) {
    return this.http.post('/signUp',obj)
      .map(res => res.json());
  }
  loginData(obj: Object) {
    return this.http.post('https://choco-lava.herokuapp.com/api/login',obj)
      .map(res => {
        return this.resObj = res;
      });
  }

  getFeature() {
      return this.feature;
  }

}
