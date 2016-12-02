export class ValidationServiceVerify {
	static getValidationErrorVerify(validatorNomor_handphone: string, validationValue?: any) {	
		let config = {
			'required': 'Required',
			'invalidNomorHandphone' :'Nomor Handphone tidak valid'
		};

		return config[validatorNomor_handphone];
	}

	static nomorhandphoneValidator(control) {
		if(control.value.match(/^[0-9]+/)){ 
			return null;
		}
		else{
			return { 'invalidNomorHandphone' : true };
		}
	}
}