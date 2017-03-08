// export class Complement {

// }

// export class AccountSummary {

// }

// export class Profile {
// 	name:string;
// 	last_login:string;
//   profile_image:any;
// }

// export class Score {
//   user_class:string;
//   user_status:string;
//   investor:string;
//   borrower:string;
//   avg_reviews:any;
//   fund_history:any;
// }

export class User {
	account_summary : {
		balance:any;
		income:{
			total:any
		}
		total_investment:{
			total:any
		}
		total_loan:{
			total:any
		}
		total_withdrawal:{
			total:any
		}
	}
	profile : {
		name:string;
		last_login:string;
    profile_image:any;
    is_complete:string;

		user_score : {
			user_class:string;
	    user_status:string;
	    investor:string;
	    borrower:string;
	    avg_reviews:string;
	    fund_history:string;
		}
	}
}