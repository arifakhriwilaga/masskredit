import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable ()
export class DetailService {

	private PartFormParentSource = new Subject<string>();
	private PartFormChildSource = new Subject<string>();
	
	Part$ = this.PartFormParentSource.asObservable();
	Part2$ = this.PartFormChildSource.asObservable();

	sendChild(statusPart1:string){
		this.PartFormParentSource.next(statusPart1);
	}

	sendParent(statusPart2:string){
		this.PartFormChildSource.next(statusPart2);
	}

}
