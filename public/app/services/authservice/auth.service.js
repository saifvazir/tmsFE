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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var angular2_jwt_1 = require("angular2-jwt");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isAuthenticated = false;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var headers = new http_1.Headers();
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3000/authenticate', JSON.stringify({ "payload": { credentials: credentials } }), { headers: headers }).subscribe(function (data) {
                if (data.json().success.status) {
                    localStorage.setItem('auth_key', data.json().payload.token);
                    localStorage.setItem('user_id', credentials.Username);
                    _this.isAuthenticated = true;
                }
                resolve(_this.isAuthenticated);
            });
        });
    };
    AuthService.prototype.checkUser = function (credential) {
        return this.http.post('https://abc.com', JSON.stringify({ "payload": { "Username": credential } }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('auth_key');
        localStorage.removeItem('user_id');
    };
    AuthService.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map