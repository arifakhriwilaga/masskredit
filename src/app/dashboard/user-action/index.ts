// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule  } from '@angular/common';

// Component
import { UserActionComponent } from './user-action.component';

import { UserActionService } from './user-action.service';

// routing
export const routes = [
  { path: '',    component: UserActionComponent ,
      children: [
        { path: '', redirectTo: 'user-loan' },
        {    
          path: 'user-invest', 
          loadChildren: () => System.import('./user-invest').then((comp: any) => comp.default) 
        },
        {    
          path: 'user-loan', 
          loadChildren: () => System.import('./user-loan').then((comp: any) => comp.default) 
        },
      ]
  },
];
 
@NgModule({
  declarations: [ UserActionComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [ UserActionService ]
})	


export default class UserActionModule {
  static routes = routes;
}


