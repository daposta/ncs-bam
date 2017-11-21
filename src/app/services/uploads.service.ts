import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
declare var $: any;

@Injectable()
export class UploadsService {

  private uploadDirURL = '';

  constructor(private http: Http, private router:Router) { }




  findDocsbyFormID(formID: any){
  	console.log("inside service");
  	 let docsURL = 'https://129.144.154.136/ords/pdb1/ncs/system/form41attachmentsbyform/';
      let headers = new Headers();
   		 headers.append('Content-Type','application/json');
   		 headers.append('Allow-Cross-Origin','*');

     return this.http.get(docsURL + formID , {headers: headers})
              .toPromise()
              .then(response => response.json())
              .catch(error => console.log(error));
  };

  uploadToform41Folder(){

  }

}
