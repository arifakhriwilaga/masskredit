import { Injectable }		from '@angular/core';
import { Headers, Http }	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';
import { Router }			from '@angular/router';

@Injectable ()
export class RegisterService {
	private headers  	= new Headers ({'Content-Type' : 'application/json'}); //URL to web API
	private loggedinUrl = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/register'; //URL API REGISTER

	
}