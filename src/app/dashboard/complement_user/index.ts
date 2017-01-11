// Module
import { BrowserModule }                                       from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { RouterModule, Routes, ActivatedRoute }                from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { HttpModule }                                          from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder }       from '@angular/forms';
import { CommonModule  }                                       from '@angular/common';


// Component
import { ComplementComponent }      from './complement.component';
import { JobComponent }     	      from './job';
import { BusinessComponent }        from './business';
import { PersonalFamilyComponent }  from './personal_family';
import { FamilyComponent }          from './family';
import { SupportComponent }         from './support';
import { BankComponent }            from './bank';
import { InstallmentComponent }     from './installment';
import { OtherIncomeOneComponent }  from './other_income_one';
import { OtherIncomeTwoComponent }  from './other_income_two';
// import { IndexComponent }        from './index/index.component';

export const routes = [
  { path: '', component: ComplementComponent}     
];


@NgModule({
  declarations: [
    ComplementComponent, // declarations LoginComponent
    JobComponent,
    BusinessComponent,
    PersonalFamilyComponent,
    FamilyComponent,
    SupportComponent,
    BankComponent,
    InstallmentComponent,
    OtherIncomeOneComponent,
    OtherIncomeTwoComponent
    // IndexComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
      // 
  ]
})

export default class ComplementModule { 
  static routes = routes;
}

// export * from './fund.component'; 



