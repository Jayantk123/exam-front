import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { threadId } from 'worker_threads';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private _http:HttpClient) { }


  public addresult(data:any)
  {
    return this._http.post(`${baseUrl}/result/`,data);
  }

  public getallResult()
  {
    return this._http.get(`${baseUrl}/result/`);
  }
}
