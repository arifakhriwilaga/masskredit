// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { LocalStorageService }   from 'angular-2-local-storage';
import { CommonModule }            from '@angular/common';

// Component for view
import { JobComponent }     from './job';
import { BusinessComponent } from './business';
import { FamilyComponent }   from './family';

import { SupportComponent }  from './support';
import { BankComponent }     from './bank';
import { PersonalComponent } from './personal';
import { PersonalFamilyComponent } from './personal_family';


// debugger;
// Component
import { EditComponent }        from './edit.component';
// alert("Dari Profile");
export const routes = [
  { path:'', component: EditComponent}
] 

@NgModule({
  declarations: [
    EditComponent, // declarations LoginComponent
    JobComponent,
    BusinessComponent,
    FamilyComponent,
    // SupportComponent, 
    // BankComponent,
    PersonalComponent,
    PersonalFamilyComponent
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

export default class EditModule { 
  public routes = routes;
}

