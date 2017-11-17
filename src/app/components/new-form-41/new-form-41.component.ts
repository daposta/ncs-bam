import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Form41sService} from '../../services/form41s.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

declare var $: any;
@Component({
  selector: 'app-new-form-41',
  templateUrl: './new-form-41.component.html',
  styleUrls: ['./new-form-41.component.css'],
  providers : [Form41sService, ]

})
export class NewForm41Component implements OnInit {

  f41: any= {};
  constructor(private form41Srv: Form41sService,private toastr: ToastsManager, 
  private _vcr: ViewContainerRef,) {
      this.toastr.setRootViewContainerRef(_vcr);
   }

  ngOnInit() {
  	console.log( localStorage.getItem('uid'));
  	
  };

  save(){


    let formData = new FormData();
    let userId = localStorage.getItem('userid');
    let ref = this.makeid();
   
    this.f41['userid'] = userId;
    this.f41['ref'] = ref;
    this.f41['status'] = 'Pending';
   formData.append('iduser',  this.f41['userid'] );
   formData.append('formref',this.f41['ref']);
   formData.append('cname', this.f41['name']);
   formData.append('registeredaddress', this.f41['address']);
   formData.append('descriptionofbusiness', this.f41['description']);
    formData.append('purposeofbusiness', this.f41['purpose']);
    formData.append('status', this.f41['status'] );

    let toastr = this.toastr;
  
  	 // this.form41Srv.save(formData);
    let form41sUrl = "https://129.144.154.136/ords/pdb1/ncs/system/form41/";

        $.ajax ( {
        type: 'POST',
        url: form41sUrl,
        enctype: ' multipart/form-data',
        data: formData,
        cache: false,
        processData: false,
        contentType: false,
        crossDomain: true,
        xhrFields: { withCredentials: true },
        beforeSend: function (xhr) { 
          console.log('setting credentials.......');
          
        },
        success: function(data) { 
          console.log("=====Sent successfully to the database========");
          toastr.success("Success", 'Form 41 saved successfully');
          window.location.href= '/entrys-of-premise';
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("=====uploading system error ========");
        }
      } );

  }


   makeid() {
		  var text = "";
		  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		  for (var i = 0; i < 10; i++)
		    text += possible.charAt(Math.floor(Math.random() * possible.length));

		  return text;
	}


}
