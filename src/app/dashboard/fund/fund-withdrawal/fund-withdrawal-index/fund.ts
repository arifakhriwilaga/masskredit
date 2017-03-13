export class Fund {
	paging : {
		current_page:number;
		per_page:number;
		total:number;
	}
	withdrawal : {
		amount:any;
		confirm_date:string;
		date:string;
		id:number; 
		no_reference:string;
		status:string;
	}
}