import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
import { Step1RegisterComponent }								from'./register1.component';
@Directive({
  selector: '[step1]'
})

export class step1Directive {
	
	constructor(private step1 : Step1RegisterComponent) { }	
	
	showstep1 (){
		return this.step1;
	}
}