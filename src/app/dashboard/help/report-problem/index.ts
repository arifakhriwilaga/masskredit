// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component create fund
import { ReportProblemComponent } from './report-problem.component';

// service
import { ReportProblemService } from './report-problem.service';

export const routes = [
  { path:'', component: ReportProblemComponent},
] 

@NgModule({
  declarations: [ ReportProblemComponent ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ReportProblemService]
})

export default class ReportProblemModule { 
  static routes = routes;
}