// module
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// component
import { IndexComponent } from './index.component';
import { DetailComponent } from './part/fund-withdrawal-detail';
import { IndexService } from './index.service';

export const routes = [ { path:'', component: IndexComponent } ] 

@NgModule({
  declarations: [ 
    IndexComponent,
    DetailComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [IndexService]
})

export default class IndexModule { 
  static routes = routes;
}
