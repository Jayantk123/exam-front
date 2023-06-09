import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor( private http:HttpClient) {
  }

  public addProduct(product:any,uId:any)
  {

    
return this.http.post(`${baseUrl}/user/${uId}`,product);
  }
}
