import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';
declare var $: any;


@Injectable()
export class RolesService {

  private rolesUrl = "https://129.144.154.136/ords/pdb1/ncs/config/roles/";

  constructor(private http: Http, private router:Router) { }


  fetchRoles(){
  		 let headers = new Headers();
   		 headers.append('Content-Type','application/json');
   		 headers.append('Allow-Cross-Origin','*');
		   return this.http.get(this.rolesUrl,  {headers: headers})
		              .toPromise()
		              .then(response => response.json())
		              .catch(error => {
		              	console.log(error);
		              });
  };

  //  private handleError(error: any) {
  //   var err = error.json();
  //   if(error.detail = "Signature has expired."){
  //     localStorage.removeItem('auth_token');
  //     this.router.navigateByUrl('/login');
  //   }
  //   return Promise.reject(error.message || error);
  // }


}
