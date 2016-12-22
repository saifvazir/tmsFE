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
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './services/authguard/auth.guard';
const appRoutes: Routes = [
  { path: 'admin', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent, },
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
 

];

@NgModule({
  imports:      [ BrowserModule ,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,RegisterComponent,KeysPipe,NavbarComponent,FooterComponent,LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
