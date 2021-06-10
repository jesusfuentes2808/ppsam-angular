import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
//import * as data from '../../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }

  getData(url): Observable<any> {
    return this.http.get<any>(url);
  }

}
