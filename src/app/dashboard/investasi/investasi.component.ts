import { Component } 		from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { InvestasiService }	from './investasi.service';
@Component({
	moduleId: module.id,
	selector: 'investasi',
	templateUrl: 'investasi.component.html'
})



export class InvestasiComponent { 
	constructor(private investasiservice : InvestasiService) { }
	listInvestasi() {
		return this.investasiservice.Index();
	}

}