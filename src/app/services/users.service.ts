import { Injectable, ViewContainerRef } from '@angular/core';

import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
declare var $: any;
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class UsersService {
	evil : any;
  // private loginUrl = this.globals.LOGIN_URL; 
  private usersUrl = "https://129.144.154.136/ords/pdb1/ncs/system/users/";
  private userEmailUrl = "https://129.144.154.136/ords/pdb1/ncs/system/user/email/";
  private userInfoURL ="https://129.144.154.136/ords/pdb1/ncs/system/userinfo/";
  constructor(private http: Http, private router:Router, private toastr: ToastsManager, 
		private vRef: ViewContainerRef) {
		

	 }

 


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
		
	};

	findUserByEmail(email:String){
		let headers = new Headers();
   		 headers.append('Content-Type','application/json');
   		 headers.append('Allow-Cross-Origin','*');
		   return this.http.get(this.userEmailUrl +email,  {headers: headers})
		              .toPromise()
		              .then(response => response.json())
		              .catch(this.handleError);
	};



	getUserInfoByID(userID:String){
		let headers = new Headers();
   		 headers.append('Content-Type','application/json');
   		 headers.append('Allow-Cross-Origin','*');
		   return this.http.get(this.userInfoURL + userID,  {headers: headers})
		              .toPromise()
		              .then(response => response.json())
		              .catch(this.handleError);
	}



	



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
