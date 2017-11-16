import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
declare var $: any;

@Injectable()
export class Form41sService {
   

  private zonesUrl = "https://129.144.154.136/ords/pdb1/ncs/system/form41/";

  constructor() { }


   save(data: FormData){


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

}
