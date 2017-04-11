import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

declare var jQuery:any;
@Injectable ()
export class ReportProblemService {
	constructor (private http:Http, private router:Router) { }

	// set headers
  private headers = new Headers({ 
		'Content-Type': 'application/json',
		'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	})
	private options = new RequestOptions({ headers: this.headers })

	// declare object url help
	private postReportUrl = 'https://masscredit-api.stagingapps.net/user/report-problem';
	
	// request post help
  postReport(data:any): Promise<any>{
		return this.http.post(this.postReportUrl,data,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError)
  }

	handleError(err){
		var error = JSON.parse(err._body)
    return error
	}
}