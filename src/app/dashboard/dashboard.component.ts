import { Component, ViewEncapsulation }       from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { XLargeDashboard } from './x-large';



@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'dashboard',  // <dashboard></dashboard>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // providers: [
  //   Title
  // ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DashboardComponent { }
