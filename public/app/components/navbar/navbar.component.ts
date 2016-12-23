import { Component,OnInit } from '@angular/core';
import {} from '@angular/router';
import {AuthService} from '../../services/authservice/auth.service';


@Component({
    moduleId:module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    providers:[AuthService]
})
export class NavbarComponent implements OnInit {
    
    auth:AuthService
    constructor(private authService:AuthService){
        this.auth=authService;
    }

    ngOnInit(){

    }
 }