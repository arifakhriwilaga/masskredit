export class ValidationServiceInvestasi {
	static getValidationErrorInvestasi(validatorName: string, validationValue?: any) {	
		let config = {
			'required': 'Required',
			'invalidNamaInvestasi' :'Nama Investasi tidak valid',
			'invalidAmount': 'Invalid character',
            'invalidTenor': 'Invalid character',
            'invalidCollateral': 'Invalid character',

		};

		return config[validatorName];
	}

	static amountValidator(control) {
		if(control.value.match(/^[0-9]*$/)){ 
			return null;
		}
		else{
			return { 'invalidAmount' : true };
		}
	}

	static tenorValidator(control) {
		if(control.value.match(/^[0-9]*$/)){ 
			return null;
		}
		else{
			return { 'invalidTenor' : true };
		}
	}

	static collateralValidator(control) {
		if(control.value.match(/^[0-9]*$/)){ 
			return null;
		}
		else{
			return { 'invalidCollateral' : true };
		}
	}
	static namainvestasiValidator(control) {
		if(control.value.match(/^[a-zA-Z.\s]*$/)){ 
			return null;
		}
		else{
			return { 'invalidNamaInvestasi' : true };
		}
	}
}