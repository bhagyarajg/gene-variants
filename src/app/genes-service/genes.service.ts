import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class GenesService {

  constructor(private http: Http) { }
  getGeneVariants(): Observable <any[]> {
   return  this.http.get('http://oncokb.org/api/v1/genes/673/variants')
                          .map(response => response.json())
                          .catch(error => Observable.throw(error.statusText));
    // console.log(genes);
     // return genes;
  }

}
