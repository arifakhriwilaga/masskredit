import { Component, OnInit, AfterContentInit, ElementRef } 	from '@angular/core';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router } from '@angular/router';
import { ProfileComponent }	from './../profile.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'installment',
	templateUrl: 'installment.component.html'
})

export class InstallmentComponent { 

	constructor(
		private profileComponent : ProfileComponent, 
		private http:Http, 
		private router:Router
	) {}

	private node :any;
	private node1 :any;
	private formInstallment = 0;
	private data = {
		access_token :JSON.parse(localStorage.getItem('access_token')),
		jumlah_angsuran : null,
		description_angsuran : null
	};

	private dataListInstallment = [];
	private dataGetList = {
		access_token : JSON.parse(localStorage.getItem("access_token")),
		page:1,
    limit:10
	};

	private dataRemove = {
		access_token : JSON.parse(localStorage.getItem("access_token")),
		installment_id : null
	}

	// set header
	private headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

 	private options = new RequestOptions({ headers: this.headers });

	ngOnInit(){
		jQuery('#jumlah_angsuran').mask('000000000000');
		// dynamic data angsuran
		var counter = 1;
		jQuery("#addButton").click(function(){
			if(counter > 5) {
				alert("Only 5 textbox");
				return false;
			}



		// 	var newTextBoxDiv = jQuery(document.createElement('div'))
		// 	.attr("id",'TextBoxDiv' + counter).attr("class",'blockElement');

		// 	newTextBoxDiv.after().html(
		// 		'<label>Angsuran</label>' +
		// 		'<input type="text" placeholder="Jumlah Angsuran" class="form-control input-md jumlah-angsuran" name="textbox1' + counter + 
		// 		'" id="textbox1' + counter + '" value="">' +
		// 		'<input type="text" placeholder="Deskripsi Angsuran" class="form-control input-md description-angsuran" name="textbox2' + counter + 
		// 		'" id="textbox2' + counter + '" value="">'
		// 	);
		// 	newTextBoxDiv.appendTo("#TextBoxesGroup");
		// 	counter++;
		// 	console.log(counter)
		// });

		// jQuery("#removeButton").click(function(){
		// 	if(counter <= 1){
		// 		alert("No more textbove remove");
		// 		return false;
		// 	}	
		// 	counter--;
		// 	console.log(counter)
		// 	jQuery("#TextBoxDiv" + counter).remove();

		});
		this.getListInstallment()
	}


	// condition for section data jaminan
	cancelCollateral(){
		// jQuery(".data-angsuran").prop("disabled", true);
		this.formInstallment = 0;
		// this.profileComponent.getProfile();
	}

	updateDataJaminan(data){
		// jQuery(".data-diri").prop("Profile, true);
		// this.updaprofile();
	}

	showFormCollateral(){
		this.formInstallment = 1;
	}

	submitInstallment(data){
		if(data) {
			this.sendDataInstallment();
		}
	}

	sendDataInstallment(){
		this.http.post('https://masscredit-api.stagingapps.net/user/installment/add',this.data,this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					// for message
					var kosong:null;
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					if(code == 200) {
            this.formInstallment = 0;
						alert("Angsuran berhasil ditambah, harap menunggu konfirmasi")
					}
					else{
						alert("Angsuran gagal diupdate")
					}
				},
				(err:any) => {
          var error   = JSON.parse(err._body)
          var message = error.meta.message;
          var code = error.meta.code;
          if(message == "unauthorized") {
            alert("Maaf session anda telah habis silahkan login kembali")
            return this.router.navigateByUrl('/dashboard/sign-out')
            
          } 
          if(code == "500") {
            alert("Update profile yang sebelumnya masih dalam proses persetujuan")
            return this.formInstallment = 0;
            
          } 
		    }
			);
	}

	getListInstallment(){
		this.http.post('https://masscredit-api.stagingapps.net/user/installment/get-list', this.dataGetList, this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					// console.log(response)
					var kosong:null;
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					var funds		= response.data.fund;
					var current_page= response.data.paging.current_page;
					var per_page 	= response.data.paging.per_page;
					var total		= response.data.paging.total;
					this.dataListInstallment = response.data.installment;

					for(let i = 0; i < this.dataListInstallment.length; i++){
						let dataInstallmentAmount = this.dataListInstallment[i]
						let installment_amount = dataInstallmentAmount['installment_amount'];
						// condition make delimiter
						var _minus = false;
						var b:any = installment_amount.toString();
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
								// console.log(c)
							} else {
								c = b.substr(i-1,1) + c;
							}
						}
						if (_minus) c = "-" + c ;
						let idr = "Rp.";
						dataInstallmentAmount['installment_amount'] = idr.concat(c);
						// this.collateral = 1;
					}
					// this.per_page 		= per_page;
					// this.total 			= total;
					// if(code == 200) {
					// 	var total_pagination = Math.ceil(total/this.limit) //round up
						// this.total_pagination = total_pagination
						
						// for (var i = 1; i <= total_pagination; i++) {
						// 	this.array_total.push(i)
						// }
					// }
				},
				(err:any) => {
          var error   = JSON.parse(err._body)
          var message = error.meta.message
            if(message == "unauthorized") {
              alert("Maaf session anda telah habis silahkan login kembali")
              return this.router.navigateByUrl('/dashboard/sign-out')
              
            } 
		    }
			);
	}

	removeInstallment(id){
		this.dataRemove.installment_id = id;
		alert("dari remove")
		// console.log(this.data)
		this.http.post('https://masscredit-api.stagingapps.net/user/installment/delete',this.dataRemove,this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					var code = response.meta.code;
					// console.log(response);
					if(code == 200) {
						alert("Angsuran berhasil dihapus, harap menunggu konfirmasi")
						this.getListInstallment()
					}
					else{
						alert("Gagal menambahkan data")
						// return this.router.navigateByUrl('/dashboard')
					}
				},
				(err:any) => {
					var error   = JSON.parse(err._body)
					var message = error.meta.message
					if(message == "unauthorized") {
						alert("Maaf session anda telah habis silahkan login kembali")
						return this.router.navigateByUrl('/dashboard/sign-out')
					}	
					if(message == "Delete angsuran tidak dapat dilakukan, masih dalam proses persetujuan.") {
						alert("Perubahan angsuran yang sebelumnya, masih dalam proses persetujuan.")
						// return this.router.navigateByUrl('/dashboard/sign-out')
						
					}	
				
				}
			);
	}
}