import { Injectable , ViewContainerRef} from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;

@Injectable()
export class Form41sService {
   

  private form41sUrl = "https://129.144.154.136/ords/pdb1/ncs/system/form41/";

  constructor(private http: Http, private router:Router, private toastr: ToastsManager, 
		private _vcr: ViewContainerRef,) { }


  fetchForm41(){
  		 //let v = this.page_header();
		   let headers = new Headers();
   		 headers.append('Content-Type','application/json');
   		 headers.append('Allow-Cross-Origin','*');
		   return this.http.get(this.form41sUrl,  {headers: headers})
		              .toPromise()
		              .then(response => response.json())
		              .catch(this.handleError);
  };


  findForm41ByID(pk: any){
      let headers = new Headers();
   		 headers.append('Content-Type','application/json');
   		 headers.append('Allow-Cross-Origin','*');

     return this.http.get(this.form41sUrl + pk , {headers: headers})
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


   save(data: FormData){

   	


  };

    private handleError(error: any) {
    var err = error.json();
    if(error.detail = "Signature has expired."){
      localStorage.removeItem('auth_token');
      this.router.navigateByUrl('/login');
    }
    return Promise.reject(error.message || error);
  }

}
