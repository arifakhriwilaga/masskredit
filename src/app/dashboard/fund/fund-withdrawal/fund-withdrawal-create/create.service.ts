import { Injectable }										from '@angular/core';
import { Headers, Http, RequestOptions }					from '@angular/http';
import { Observable }     									from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, FormControl }	from '@angular/forms';
import { Router }											from '@angular/router';


// Declare Token
const localtoken 	= JSON.parse(localStorage.getItem('access_token'));
const token_tambah 	= '34g35g3';

// URL API
const createURL = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/investloan/new'; 
const indexURL  = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/investment/getlist';

@Injectable ()
export class CreateService {


	

}
