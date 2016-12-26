import {Component, OnInit, EventEmitter, PipeTransform, Pipe} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Router} from '@angular/router';
import {AuthHttp,AuthConfig,JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {AuthService} from '../../services/authservice/auth.service';

@Component({
    moduleId: module.id,
    selector :"unauth",
    templateUrl:"unauthorised.component.html"
})
export class UnauthorisedComponent implements OnInit{
    constructor(){}
    ngOnInit(){

    }
}