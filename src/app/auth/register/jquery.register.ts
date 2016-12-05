
declare var jQuery:any;
export class JqueryService  { 

	showStep1() {
		jQuery('#step-1').fadeIn();
		jQuery('#step-2').hide();
		jQuery('#step-3').hide();
		jQuery('#step-4').hide();
	}

	showStep2() {
		// console.log(step1)

		// console.log("Step2")
		jQuery('#step-1').hide();
		jQuery('#step-2').fadeIn();
		jQuery('#step-3').hide();
		jQuery('#step-4').hide();
	}

	showStep3() {
		jQuery('#step-1').hide();
		jQuery('#step-2').fadeOut();
		jQuery('#step-3').fadeIn();
		jQuery('#step-4').hide();

	}

	showStep4() {
		jQuery('#step-1').hide();
		jQuery('#step-2').hide();
		jQuery('#step-3').fadeOut();
		jQuery('#step-4').fadeIn();
	}
}
	
