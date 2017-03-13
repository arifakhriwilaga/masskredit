// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common';
import { RouterModule } from '@angular/router';

// component fund
import { MarketComponent } from './market.component';

export const routes = [
  { 
    path: '', 
    component: MarketComponent,
    // children : [
    //   { path: '', redirectTo: 'fund-add' },
    //   {    
    //     path: 'index', 
    //     loadChildren: () => System.import('./fund-add').then((comp: any) => comp.default) 
    //   },
    // ]   
  }     
];

@NgModule({
  declarations: [MarketComponent],
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