import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot }  from '@angular/router';
import { DashboardService }  from './dashboard.service';

export class DashboardUserResolver implements Resolve<any> {
	
	constructor(private dashboardService:DashboardService) { }

	private token = JSON.parse(localStorage.getItem("access_token"))

	resolve(route: ActivatedRouteSnapshot):Promise<any>|any  {
		console.log(route)
		// return this.dashboardService.getProfile(this.token).then(dataResponse => {
		// 	return dataResponse;
		// });
	}
}