import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import {Router} from '@angular/router';
// import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
// import {BodyOutputType} from 'angular2-toaster';

@Injectable()
export class UsersService {
	evil : any;
  // private loginUrl = this.globals.LOGIN_URL; 
  private registerUrl = "https://129.144.154.136/ords/pdb1/ncs/system/users/";
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


	register(data: any){
		return this.http.post(this.registerUrl,data)
		.subscribe(res =>{
				// this._toasterService.pop('success', 'Registration Successful', );
				//localStorage.setItem('mobile' , data['mobile']);
				//this.router.navigateByUrl('/verify-number');

				console.log(res);
				console.log(res.status)
				if(res.status == 201){
					this.router.navigateByUrl('login');
				}
				
				

		}, error =>{
			

			if(error['status']){
				this.evil = JSON.parse(error['_body']).message; //.non_field_errors[0];
			//	this._toasterService.pop('error', this.evil, '');
			}else{
				//this._toasterService.pop('error', 'You are not connected to the server', '');
			}
		   
			
		})

	};



}
