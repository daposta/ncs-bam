import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
// import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
// import {BodyOutputType} from 'angular2-toaster';
import 'rxjs/add/operator/toPromise';
declare var $: any;

@Injectable()
export class ZonesService {

   private zonesUrl = "https://129.144.154.136/ords/pdb1/ncs/config/zones/";

  constructor(private http: Http, private router:Router,) { }

  fetchZones(){
  		 let headers = new Headers();
   		 headers.append('Content-Type','application/json');
   		 headers.append('Allow-Cross-Origin','*');
		   return this.http.get(this.zonesUrl,  {headers: headers})
		              .toPromise()
		              .then(response => response.json())
		              .catch(this.handleError);
  };


  findZoneById(){

  };

  saveZone(data: FormData){


   		 $.ajax ( {
				type: 'POST',
				url: this.zonesUrl,
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
					//console.log("=====Sent successfully to the database========");
					window.location.href= '/zones';
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log("=====uploading system error ========");
				}
			} );

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
