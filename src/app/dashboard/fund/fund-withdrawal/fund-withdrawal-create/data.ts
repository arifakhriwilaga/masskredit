export class Data {
	access_token : string;
	no_reference : string;
	nama_lengkap : string;
	bank_id : number;
	no_rekening	: number;
	amount : any;
	
	profile : {
		complement_user: {
			bank : number;
			no_rekening : string;
		}
		name : string
	}
}