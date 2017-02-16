// module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { LocalStorageService }   from 'angular-2-local-storage';
import { CommonModule }          from '@angular/common';

// component profile
import { ProfileComponent } from './profile.component';
import { BankComponent } from './bank';
import { FamilyComponent } from './family';
import { PersonalComponent } from './personal';
import { SupportComponent } from './support';
import { WorkComponent } from './job/work';
import { BusinessComponent } from './job/business';
import { CollateralComponent } from './collateral';
import { InstallmentComponent } from './installment';
import { OtherIncomeComponent } from './other_income';
import { OtherIncomeOneComponent } from './other_income/other_income_one';
import { OtherIncomeTwoComponent } from './other_income/other_income_two';

export const routes = [{ path:'', component: ProfileComponent}] 

@NgModule({
  declarations: [
    ProfileComponent,
    BankComponent,
    CollateralComponent,
    FamilyComponent,
    InstallmentComponent,
    WorkComponent,
    BusinessComponent,

    OtherIncomeComponent,
    OtherIncomeOneComponent,
    OtherIncomeTwoComponent,
    
    PersonalComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],providers: [ ]
})

export default class ProfileModule { 
  static routes = routes;
}

