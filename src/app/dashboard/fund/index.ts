// module
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common';
import { RouterModule } from '@angular/router';

// component fund
import { FundComponent } from './fund.component';

export const routes = [
  { 
    path: '', 
    component: FundComponent,
    children : [
      { path: '', redirectTo: 'fund-add' },
      {    
        path: 'fund-add', 
        loadChildren: () => System.import('./fund-add').then((comp: any) => comp.default) 
      },
      {    
        path: 'fund-withdrawal', 
        loadChildren: () => System.import('./fund-withdrawal').then((comp: any) => comp.default) 
      },
    ]      
  }     
];

@NgModule({
  declarations: [FundComponent],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export default class FundModule { 
  static routes = routes;
}