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
var angular2_jwt_1 = require("angular2-jwt");
var UserInfoService = (function () {
    function UserInfoService(_authHttp) {
        this._authHttp = _authHttp;
    }
    UserInfoService.prototype.getUserInfo = function () {
        var header = new http_1.Headers();
        header.append('auth_token', localStorage.getItem('User_id'));
        return this._authHttp.post('myurl', JSON.stringify({ 'User_id': localStorage.getItem('User_id') }), { headers: header })
            .map(function (res) { return res.json(); });
    };
    return UserInfoService;
}());
UserInfoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
], UserInfoService);
exports.UserInfoService = UserInfoService;
//# sourceMappingURL=userinfoservice.js.map