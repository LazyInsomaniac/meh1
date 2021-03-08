import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getFirstApi(){
    return this.http.get('http://www.appgrowthcompany.com:5069/api/v1/employee/getAll');
  }

  getSecondApi(){
    return this.http.get('http://www.appgrowthcompany.com:5069/api/v1/employee/get/1');
  }
}
