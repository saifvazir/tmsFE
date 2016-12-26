import { Component,OnInit } from '@angular/core';
import {} from '@angular/router';
import {UserInfoService} from '../../services/user/userinfoservice'
import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {User} from '../dashboard/dashboard.component';
@Component({
    moduleId:module.id,
    selector: 'userinfo',
    templateUrl: 'userinfo.component.html',
    providers:[UserInfoService],
    styleUrls:[]
})
export class UserInfoComponent implements OnInit{ 

    user:User;
    constructor(private userInfoService : UserInfoService){}
    ngOnInit(){
        this.getUser();
    }
    getUser(){
        this.userInfoService.getUserInfo().subscribe(
            response => {this.user=response},
            err => {console.log(err)}
        );
    }

}