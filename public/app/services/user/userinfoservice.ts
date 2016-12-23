import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserInfoService {
    constructor(private _authHttp:AuthHttp){}
    getUserInfo(){
        let header=new Headers();
        header.append('auth_token',localStorage.getItem('User_id'));
        return this._authHttp.post('myurl',JSON.stringify({'User_id':localStorage.getItem('User_id')}),{headers:header})
        .map(res => res.json());
    }
}