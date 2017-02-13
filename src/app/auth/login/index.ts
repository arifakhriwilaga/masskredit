// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// component login
import { LoginComponent } from './login.component';

export const routes = [{ path:'', component: LoginComponent}] 

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    HttpModule,
    FormsModule,
  ],
  providers: [ ]
})

export default class LoginModule { 
  static routes = routes;
}

