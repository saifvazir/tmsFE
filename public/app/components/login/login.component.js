"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular2_jwt_1 = require("angular2-jwt");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var auth_service_1 = require("../../services/authservice/auth.service");
var LoginComponent = (function () {
    function LoginComponent(router, authenticationService, authHttp) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authHttp = authHttp;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.localUser = {
            Username: '',
            Password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.useJwtHelper = function () {
        var token = localStorage.getItem('id_token');
        console.log(this.jwtHelper.decodeToken(token), this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token));
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var checknow = this.authenticationService.login(this.localUser);
        checknow.then(function (res) {
            if (res) {
                _this.router.navigate(['/home']);
            }
            else {
                console.log('Invalid user');
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'log',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        auth_service_1.AuthService,
        angular2_jwt_1.AuthHttp])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map