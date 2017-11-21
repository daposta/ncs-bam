import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
declare var $: any;

@Injectable()
export class UploadsService {

  private uploadDirURL = '';

  constructor(private http: Http, private router:Router) { }




  createForm41Folder(){

  }

  uploadToform41Folder(){

  }

}
