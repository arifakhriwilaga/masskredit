// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { LocalStorageService }   from 'angular-2-local-storage';
import { CommonModule }          from '@angular/common';

// component for profile
import { BankComponent }       from './bank';


import { FamilyComponent }     from './family';
import { PersonalComponent }   from './personal';
import { SupportComponent }    from './support';
import { WorkComponent }    from './job/work';
import { BusinessComponent }    from './job/business';
import { CollateralComponent }    from './collateral';
import { InstallmentComponent }    from './installment';
import { OtherIncomeComponent }    from './other_income';
import { OtherIncomeOneComponent }    from './other_income/other_income_one';
import { OtherIncomeTwoComponent }    from './other_income/other_income_two';

// Component
import { ProfileComponent }        from './profile.component';
// alert("Dari Profile");
export const routes = [
  { path:'', component: ProfileComponent},
  { path:'edit', loadChildren: () => System.import('./edit').then((comp: any) => comp.default)} 

] 

@NgModule({
  declarations: [
    ProfileComponent, // declarations LoginComponent
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
  imports: [ // import Angular's modules
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),

  ],
  // exports: [LoginComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    LocalStorageService,
    // LoginComponent,
  ]
})

export default class ProfileModule { 
  public routes = routes;
}

