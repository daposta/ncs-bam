import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
// import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
// import {BodyOutputType} from 'angular2-toaster';
import 'rxjs/add/operator/toPromise';
declare var $: any;

@Injectable()
export class UsersService {
	evil : any;
  // private loginUrl = this.globals.LOGIN_URL; 
  private usersUrl = "https://129.144.154.136/ords/pdb1/ncs/system/users/";
  constructor(private http: Http, private router:Router,) { }

 //  login(mobile: string, password : string){
	// 	//this.logout();
	// 	let headers = new Headers();
	// 	headers.append('Content-Type', 'application/json');
	// 	return this.http.post(this.loginUrl,  JSON.stringify({mobile, password}), {headers})
	// 	.subscribe(res =>{
	// 			let data = res.json();
	// 			if (data.token){
	// 			localStorage.setItem('auth_token', data.token);
	// 			this.loggedIn = true;
	// 			this.router.navigate(['']);
				
	// 		}
	// 		else{
	// 			this.router.navigate(['/login']);
	// 		}

	// 	}, error =>{
			
	// 		if(!error.status){
	// 			this._toasterService.pop('error', "You are not connected to the server", '');
	// 		}else{
	// 				this.evil = JSON.parse(error['_body']).non_field_errors[0];
	// 			this._toasterService.pop('error', this.evil, '');
	// 		}
		
			
	// 	})

		
	// };


	fetchUsers(){

		   //let v = this.page_header();
		   let headers = new Headers();
   		 headers.append('Content-Type','application/json');
   		 headers.append('Allow-Cross-Origin','*');
		   return this.http.get(this.usersUrl,  {headers: headers})
		              .toPromise()
		              .then(response => response.json())
		              .catch(this.handleError);

	};


	register(data: FormData){
		
   		

   		 $.ajax ( {
				type: 'POST',
				url: this.usersUrl,
				enctype: ' multipart/form-data',
				data: data,
				cache: false,
				processData: false,
				contentType: false,
				crossDomain: true,
				xhrFields: { withCredentials: true },
				beforeSend: function (xhr) { 
					console.log('setting credentials.......');
					
				},
				success: function(data) { 
					console.log("=====Sent successfully to the database========");
					window.location.href= '/login';
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log("=====uploading system error ========");
				}
			} );
		

	};



	private page_header(){
     //let data =  localStorage.getItem('auth_token');
      let headers = new Headers();
      let opt: RequestOptions;
      //headers.append('Authorization', 'JWT ' + data );
      opt = new RequestOptions({headers: headers})  ;
      return opt;
  }

  private handleError(error: any) {
    var err = error.json();
    if(error.detail = "Signature has expired."){
      localStorage.removeItem('auth_token');
      this.router.navigateByUrl('/login');
    }
    return Promise.reject(error.message || error);
  }




}
