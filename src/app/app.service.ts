import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
resObj;
  feature : Array<any>;
  constructor(private http: Http) {
    this.feature = [
        { head: 'Manufacturer', name: ['Apple','Samsung','HTC','Nokia','Sony'] },
        { head: 'Storage', name: ['16 GB','32 GB'] },
        { head: 'OS', name: ['Android','iOS','Windows'] },
        { head: 'Camera', name: ['5 Mega pixel','8 Mega pixel','12 Mega pixel','15 Mega pixel'] }
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
