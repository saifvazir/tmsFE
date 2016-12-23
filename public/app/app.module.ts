import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent}  from './app.component';
import { NavbarComponent}  from './components/navbar/navbar.component';
import { FooterComponent}  from './components/footer/footer.component';
import { HomeComponent}  from './components/home/home.component';
import { RegisterComponent,KeysPipe}  from './components/register/register.component';
import { LoginComponent}  from './components/login/login.component';
import { UserInfoComponent}  from './components/userinfo/userinfo.component';
import { AuthGuard } from './services/authguard/auth.guard';
import {AuthService} from "./services/authservice/auth.service";
import {AUTH_PROVIDERS} from "angular2-jwt";
const appRoutes: Routes = [
    { path: '', component:RegisterComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent},
    { path: '**', component: LoginComponent, },
];

@NgModule({
  imports:      [ BrowserModule ,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,HomeComponent,RegisterComponent,KeysPipe,NavbarComponent,FooterComponent,LoginComponent,
   UserInfoComponent],
  bootstrap:    [ AppComponent ],
  providers:    [AUTH_PROVIDERS,AuthGuard,AuthService]
})
export class AppModule { }
