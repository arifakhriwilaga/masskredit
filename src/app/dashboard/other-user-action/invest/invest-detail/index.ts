// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component
import { DetailComponent } from './detail.component';
import { VerifyComponent } from './part/verify';

export const routes = [
  { path:'', component: DetailComponent},
] 

@NgModule({
  declarations: [
    DetailComponent,
    VerifyComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export default class DetailModule { 
  static routes = routes;
}

