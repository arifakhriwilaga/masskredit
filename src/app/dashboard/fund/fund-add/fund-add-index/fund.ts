export class Fund {
	paging : {
		current_page:number;
		per_page:number;
		total:number;
	}
	fund : {
		amount:any;
		confirm_date:string;
		date:string;
		id:number; 
		no_reference:string;
		status:string;
	}
}