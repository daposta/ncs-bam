import { Component, OnInit,ViewContainerRef } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Form41sService} from '../../../services/form41s.service';
declare var $: any;


@Component({
  selector: 'app-cac-entry-of-premise-detail',
  templateUrl: './cac-entry-of-premise-detail.component.html',
  styleUrls: ['./cac-entry-of-premise-detail.component.css'],
   providers : [Form41sService, ]
})
export class CacEntryOfPremiseDetailComponent implements OnInit {
 
  entry_of_premise: Object= {};
  approval: Object= {};
 	error: any;	
  constructor(private form41Srv: Form41sService, private route: ActivatedRoute,
    private toastr: ToastsManager, private _vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
  	this.getDetail()
  }


  getDetail(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.form41Srv.findForm41ByID(+ params['id']))
		 .subscribe(
		 	data =>this.entry_of_premise = data.items[0]	);


  }

  saveApproval(){
    console.log('=====');

    // update form 41 status
    console.log(this.entry_of_premise);
     let formApprovalUrl = 'https://129.144.154.136/ords/pdb1/ncs/system/form41/';
      let toastr = this.toastr; 
      var t = { 
              'idForm': this.entry_of_premise['IDFORM'],
             'comments':  this.entry_of_premise['comms'],
             'status': this.entry_of_premise['formStatus'],
              'cname': this.entry_of_premise['CNAME'] ,
               'registeredaddress':  this.entry_of_premise['REGISTEREDADDRESS'],
              'purposeofbusiness':  this.entry_of_premise['PURPOSEOFBUSINESS'],
               'descriptionofbusiness':  this.entry_of_premise['DESCRIPTIONOFBUSINESS'],
                'formref': this.entry_of_premise['FORMREF'],
               'iduser':  this.entry_of_premise['IDUSER']
             };
  
    $.ajax ( {
            type: 'PUT',
            url: formApprovalUrl,
            //enctype: 'multipart/form-data',
             headers:t ,
            cache: false,
            processData: false,
            contentType: 'application/json',
            crossDomain: true,
            xhrFields: { withCredentials: true },
            beforeSend: function (xhr) { 
              console.log('setting credentials.......');
              console.log(this.headers);
           
            },
            success: function(data) { 
              console.log("=====Sent updated form41 to the database========");
              toastr.success("Success", 'Approval submitted successfully');
             // window.location.href= '/cac/entrys-of-premise/' + this.entry_of_premise['idForm'] ;
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log("=====uploading system error ========");
            }
          } );

  }

}
