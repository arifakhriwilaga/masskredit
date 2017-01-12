import { Component, OnInit, AfterContentInit, ElementRef } 	from '@angular/core';
import { ComplementComponent }	from './../complement.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'installment',
	templateUrl: 'installment.component.html'
})

export class InstallmentComponent { 

	constructor(private complement:ComplementComponent, private elementRef : ElementRef) {}

	much(id:any){
		
	}

	private node :any;
	private node1 :any;

	ngOnInit(){
		const tmp = document.createElement("input");
		const el = this.elementRef.nativeElement.cloneNode(true);

		tmp.appendChild(el);
		this.node = tmp.innerHTML
	}

	more(){
		let node_element = '<input type="text" placeholder="Deskripsi Angsuran" class="form-control input-md description-angsuran" name="textbox2" id="textbox2">';
		this.node1 = document.createElement(node_element)
	}
}