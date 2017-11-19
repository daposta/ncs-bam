import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RoleAccessService {

  private roleAccessUrl = "https://129.144.154.136/ords/pdb1/ncs/system/roleaccess/";

  constructor(private http: Http, private router:Router) { }

  findAccessByUserID(userID:String){
  		let headers = new Headers();
   		 headers.append('Content-Type','application/json');
   		 headers.append('Allow-Cross-Origin','*');
		   return this.http.get(this.roleAccessUrl +userID,  {headers: headers})
		              .toPromise()
		              .then(response => response.json())
		                .catch(error => {
		              	console.log(error);
		              });
	}

}
