// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component create fund
import { HelpCenterComponent } from './help-center.component';

// service
import { HelpCenterService } from './help-center.service';

export const routes = [
  { path:'', component: HelpCenterComponent},
] 

@NgModule({
  declarations: [ HelpCenterComponent ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [HelpCenterService]
})

export default class ReportProblemModule { 
  static routes = routes;
}

