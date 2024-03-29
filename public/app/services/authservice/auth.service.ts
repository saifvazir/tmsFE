import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http) {}
  isAuthenticated: boolean = false;
 

  login(credentials:any) {
    var headers = new Headers();
    return new Promise((resolve) => {
        this.http.post('http://localhost:3000/authenticate',JSON.stringify({"payload":{credentials}}), {headers: headers}).subscribe((data) => {
            if(data.json().success.status) {
                localStorage.setItem('auth_key', data.json().payload.token);
                localStorage.setItem('user_id', credentials.Username);
                this.isAuthenticated = true;}
                resolve(this.isAuthenticated);
            }
        )
    });
  }
  checkUser(credential:string){
    return this.http.post('https://abc.com',JSON.stringify({"payload":{"Username":credential}})
  }
  logout(){
    localStorage.removeItem('auth_key'); 
    localStorage.removeItem('user_id'); 

  }
  loggedIn(){
    return tokenNotExpired();
  }
}