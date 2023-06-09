import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http:HttpClient) { }


  // get user by username
  public getUser(data:any)
  {
    return this._http.get(`${baseUrl}/user/${data}`);
  }


  // update user
  public updateUser(data:any)
  {
    return this._http.put(`${baseUrl}/user/`,data);
  }
}
