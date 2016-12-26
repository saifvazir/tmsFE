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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var footer_component_1 = require("./components/footer/footer.component");
var home_component_1 = require("./components/home/home.component");
var register_component_1 = require("./components/register/register.component");
var login_component_1 = require("./components/login/login.component");
var userinfo_component_1 = require("./components/userinfo/userinfo.component");
var unauthorised_component_1 = require("./components/unauthorised/unauthorised.component");
var auth_guard_1 = require("./services/authguard/auth.guard");
var auth_service_1 = require("./services/authservice/auth.service");
var angular2_jwt_1 = require("angular2-jwt");
var appRoutes = [
    { path: '', component: register_component_1.RegisterComponent },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: unauthorised_component_1.UnauthorisedComponent, },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, register_component_1.RegisterComponent, register_component_1.KeysPipe, navbar_component_1.NavbarComponent, footer_component_1.FooterComponent, login_component_1.LoginComponent,
            unauthorised_component_1.UnauthorisedComponent, userinfo_component_1.UserInfoComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [angular2_jwt_1.AUTH_PROVIDERS, auth_guard_1.AuthGuard, auth_service_1.AuthService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map