import { Injectable }		from '@angular/core';
import { Headers, Http }	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';
import { Router }			from '@angular/router';
import { JqueryService }	from'./jquery.register';

declare var jQuery:any;

@Injectable ()
export class RegisterService {
	private headers  	= new Headers ({'Content-Type' : 'application/json'}); //URL to web API
	private loggedinUrl = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/register'; //URL API REGISTER

	constructor(private jqueryService : JqueryService) { }

	Step1(){
		this.jqueryService.showStep1();
	}

	Step2(){
		this.jqueryService.showStep2();
	}

	Step3(){
		this.jqueryService.showStep3();
	}

	Step4(){
		this.jqueryService.showStep4();
	}
}