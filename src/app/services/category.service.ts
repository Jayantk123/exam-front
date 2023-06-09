import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }

  // load all category

  public categories()
  {
    return this._http.get(`${baseUrl}/category/`);
  }

  // add new category
  public  addCategory(category:any)
  {
    return this._http.post(`${baseUrl}/category/`,category);
  }

  public deleteCategory(catId:any)
  {
    return this._http.delete(`${baseUrl}/category/${catId}`);
  }

  public updateCategory(category:any)
  {
    return this._http.put(`${baseUrl}/category/`,category);
  }

  // get category by id

  public getCategory(cid:any)
  {
    return this._http.get(`${baseUrl}/category/${cid}`);
  }
}
