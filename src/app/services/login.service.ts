import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }



// current user: gives detail of loggedin persn
public getCurrentUser()
{
  return this.http.get(`${baseUrl}/current-user`);
}



  

// generate token

public generateToken(loginData:any)
{
return this.http.post(`${baseUrl}/generate-token`,loginData);
}


// login user funcn....set token in local storage
public loginUser(token:any)
{
  localStorage.setItem('token',token);
  // this.loginStatusSubject.next(true);
  return true;
}



// check is login or not

public isLoggedIn()
{
  let tokenStr = localStorage.getItem('token');
  if(tokenStr==undefined || tokenStr=='' || tokenStr==null)
  {
return false;
  }
  else
  {
    return true;
  }
}


// logout function : remove token from localstorage
public logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

// get token
public getToken()
{
  return localStorage.getItem('token');
}

// set userDetails
public setUser(user:any)
{
  localStorage.setItem('user',JSON.stringify(user));

}

// getuser
public getUser()
{
  let userStr = localStorage.getItem("user");
  // user exist
  if(userStr!=null)
  {
    return JSON.parse(userStr);
  }
  // logout
  else
  {
    this.logout();
    return null;
  }
}


// get user role
public getUserRole()
{
  let user=this.getUser();
  return user.authorities[0].authority;
}
}
 