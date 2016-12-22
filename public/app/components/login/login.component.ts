import {Component, OnInit, EventEmitter, PipeTransform, Pipe} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Router} from '@angular/router';
import {AuthHttp,AuthConfig,JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {AuthService} from '../../services/authservice/auth.service';


@Component({
    moduleId:module.id,
    selector: 'log',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    thing:string;
    data :credentials;
    jwtHelper: JwtHelper = new JwtHelper();
    constructor(
        private router: Router,
        private authenticationService: AuthService,
        public authHttp:AuthHttp) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    useJwtHelper() {
        var token = localStorage.getItem('id_token');

        console.log(
            this.jwtHelper.decodeToken(token),
            this.jwtHelper.getTokenExpirationDate(token),
            this.jwtHelper.isTokenExpired(token)
        );
    }
    login() {
    let checknow = this.authenticationService.login(this.data);
    checknow.then((res) => {
      if(res) {
        this.router.navigate(['/home']);
      } else {
        console.log('Invalid user');
      }
    });    
  }  
}

  
export interface credentials{
  Username:string,
  Password:string
}
