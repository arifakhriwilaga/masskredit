// Module
import { NgModule  }              from '@angular/core';
import { CommonModule  }              from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';


// Component Register
import { Step1RegisterComponent }     from './register1.component';
import { Step2RegisterComponent }        from './../step2';
import { Step3RegisterComponent }        from './../step3';
import { Step4RegisterComponent }        from './../step4';


console.log("dari register")
export const routes = [
  { path: '', component: Step1RegisterComponent }

]

@NgModule({
  declarations: [
    Step1RegisterComponent, // declarations RegisterComponent
    Step2RegisterComponent, // declarations RegisterComponent
    Step3RegisterComponent, // declarations RegisterComponent
    Step4RegisterComponent, // declarations RegisterComponent

  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // AuthResolve,
    
  ],
})

export default class RegisterModule { 
  static routes = routes
}

