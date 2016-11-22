import { Injectable }		from '@angular/core';
import { Headers, Http }	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';

@Injectable ()
export class InvestasiService {
	private headers  = new Headers ({'Content-Type' : 'application/json'}); //URL to web API
	private createinvestasi = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/investloan/new'; //URL API Create Investasi
	constructor (private http:Http) { }

	private data = {
		
	}
	CreateInvestasi(data) {
		// code...
	}

	Getlist(): Observable<any>{
		return this.http.get(this)
	}
}
