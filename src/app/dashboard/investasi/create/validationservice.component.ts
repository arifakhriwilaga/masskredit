export class ValidationServiceInvestasi {
	static getValidationErrorInvestasi(validatorNama_Investasi: string, validationValue?: any) {	
		let config = {
			'required': 'Required',
			'invalidNamaInvestasi' :'Nama Investasi tidak valid'
		};

		return config[validatorNama_Investasi];
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