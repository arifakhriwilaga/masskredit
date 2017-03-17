// module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// guard dashboard
import { AuthGuardDashboard } from './../auth-guard/auth-guard-dashboard.service';

// home component
import { HomeComponent } from './home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './content';

// forgot password component
import { ForgotPasswordComponent } from './content/part/forgot-password';
import { FormSatuComponent } from './content/part/forgot-password/form';
import { OtpComponent } from './content/part/forgot-password/otp';

// login component
import { LoginComponent } from './content/login';

// register component
import { PhoneNumberComponent } from './content/register/phone-number';
import { VerifyCodeComponent } from './content/register/verify-code';

export const routes = [
	{ path: '', component: HomeComponent,
    // canActivate : [ AuthGuardDashboard ],
    children: [
      { path: '', redirectTo: 'content' },
      { path: 'content', component: ContentComponent },
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent, //home component
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    ForgotPasswordComponent, //forgot password component
    FormSatuComponent,
    OtpComponent,
    LoginComponent, //login component
    PhoneNumberComponent, // regiter component
    VerifyCodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
})

export default class HomeModule {
	public routes = routes;
}