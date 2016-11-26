import { Component, ViewEncapsulation }    from '@angular/core';
import { ActivatedRoute }                  from '@angular/router';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  // moduleId: module.id, //component for styleUrls (Masih gagal)
  moduleId: module.id,
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // providers: [
  //   Title
  // ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css'], //component for styleUrls (Masih gagal)
  // styles: [require('./home.component.css')] //component for styleUrls (Masih gagal)
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent { }