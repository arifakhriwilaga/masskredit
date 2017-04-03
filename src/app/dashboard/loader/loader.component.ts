import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Subscription }   from 'rxjs/Subscription';
import { DashboardService } from './../dashboard.service';


declare var jQuery:any;

@Component({
	selector: 'loader',
	templateUrl: 'loader.component.html',
	providers: [DashboardService]
})

export class LoaderComponent implements OnInit{ 

	constructor(private dashboardService : DashboardService) {	
	}

	subscriptionDashboard:Subscription;

	// object for get token
  private token ={ 
    access_token : JSON.parse(localStorage.getItem("access_token"))
  };

  data = {
  	income:null,
  	total_investment:null,
  	total_loan:null,
  	total_withdrawal:null
  }

  statusData:number;

	ngOnInit(){
		try {
			this.dashboardService.getProfile(this.token).then(dataResponse => {
				let data = dataResponse.data.account_summary;
				this.data.income = this.delimiter(data.income.total);
				this.data.total_investment = this.delimiter(data.total_investment.total);
				this.data.total_loan = this.delimiter(data.total_loan.total);
				this.data.total_withdrawal = this.delimiter(data.total_withdrawal.total);			
			})
		} finally {
				this.statusData = 1;
		}
	}

	delimiter(nominal:any){
    var _minus = false;
    var b:any = nominal.toString();
    if (b<0) _minus = true;
      b=b.replace(".","");
      b=b.replace("-","");
      let c = "";
      let panjang = b.length;
      let j = 0;
    for (let i = panjang; i > 0; i--){
      j = j + 1;
      if (((j % 3) == 1) && (j != 1)){
        c = b.substr(i-1,1) + "." + c;
      } else {
        c = b.substr(i-1,1) + c;
      }
    }
    if (_minus) c = "-" + c ;
    let idr = "Rp.";
    return idr.concat(c);
  }
}