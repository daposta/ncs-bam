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
     let formApprovalUrl = 'https://129.144.154.136/ords/pdb1/ncs/system/form41/';
      let toastr = this.toastr; 
     console.log(this.approval);
     console.log(this.entry_of_premise);
     

    $.ajax ( {
            type: 'PUT',
            url: formApprovalUrl,
            enctype: 'multipart/form-data',
            //data: formData,
            headers: { 
              'idForm': this.entry_of_premise['idForm'],
             'comments':  this.entry_of_premise['comms'],
             'status': this.entry_of_premise['formStatus'],
              'cname': this.entry_of_premise['cname'] ,
               'registeredaddress':  this.entry_of_premise['registeredaddress'],
              'purposeofbusiness':  this.entry_of_premise['purposeofbusiness'],
               'descriptionofbusiness':  this.entry_of_premise['descriptionofbusiness'],
                'formref': this.entry_of_premise['formref'],
               'iduser':  this.entry_of_premise['iduser'],
             },
            cache: false,
            processData: false,
            contentType: false,
            crossDomain: true,
            xhrFields: { withCredentials: true },
            beforeSend: function (xhr) { 
              console.log('setting credentials.......');
           
            },
            success: function(data) { 
              console.log("=====Sent updated form41 to the database========");
              toastr.success("Success", 'Assignment saved successfully');
             // window.location.href= '/cac/entrys-of-premise/' + this.entry_of_premise['idForm'] ;
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log("=====uploading system error ========");
            }
          } );

  }

}
