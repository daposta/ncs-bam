import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Form41sService} from '../../../services/form41s.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;

@Component({
  selector: 'app-dcg-application-detail',
  templateUrl: './dcg-application-detail.component.html',
  styleUrls: ['./dcg-application-detail.component.css'],
  providers : [Form41sService, ]

})
export class DcgApplicationDetailComponent implements OnInit {
	
   application: Object= {};
 	error: any;	
  constructor(private form41Srv: Form41sService, private route: ActivatedRoute,  private toastr: ToastsManager,
   private _vcr: ViewContainerRef) { 
        this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
  		this.getDetail();
  }


    getDetail(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.form41Srv.findForm41ByID(+ params['id']))
		 .subscribe(
		 	data =>this.application = data.items[0]	);


  }


  saveApproval(){
    
    // update form 41 status
     let formApprovalUrl = 'https://129.144.154.136/ords/pdb1/ncs/system/form41/';
      let toastr = this.toastr; 
      var t = { 
              'idForm': this.application['IDFORM'],
             'comments':  this.application['comms'],
             'status': this.application['status'],
              'cname': this.application['CNAME'] ,
               'registeredaddress':  this.application['REGISTEREDADDRESS'],
              'purposeofbusiness':  this.application['PURPOSEOFBUSINESS'],
               'descriptionofbusiness':  this.application['DESCRIPTIONOFBUSINESS'],
                'formref': this.application['FORMREF'],
               'iduser':  this.application['IDUSER']
             };

            console.log(t);
  
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

  };


}
