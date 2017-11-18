import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;

@Component({
  selector: 'app-new-form-41-uploads',
  templateUrl: './new-form-41-uploads.component.html',
  styleUrls: ['./new-form-41-uploads.component.css']
})
export class NewForm41UploadsComponent implements OnInit {
  

  attachment: any= {};
  file: any=null;

  constructor(private toastr: ToastsManager, private _vcr: ViewContainerRef,) 
    { 
   		this.toastr.setRootViewContainerRef(_vcr);
	}

  ngOnInit() {
  }

  addDocument($event){
  

  	let  files = $event.target.files || $event.srcElement.files;
  	console.log(files);
     this.file = files[0];

   

  }

  upload(){
  	let formData = new FormData();
    let userId = localStorage.getItem('userid');
    
   
    this.attachment['formID'] = '41';
    this.attachment['document'] = this.file ;
   // this.f41['ref'] = ref;
    this.attachment['status'] = 'Pending';
   formData.append('idform',  this.attachment['formID'] );
   formData.append('image',this.attachment['document']);
   formData.append('title', this.attachment['title']);
   formData.append('description', this.attachment['description']);
    formData.append('Status', this.attachment['status'] );

    let toastr = this.toastr;
  
    let form41sUrl = "https://129.144.154.136/ords/pdb1/ncs/system/form41attachment/";
    let mediaCloudUrl = "https://documents-gse00012792.documents.us2.oraclecloud.com/documents/embed/link/LFD1EAD995E07744D370B0840CA5E537F54010EF7DE2/folder/FAA47EB8BEE8F06ADF84880D0CA5E537F54010EF7DE2/_NigeriaCustom/";
    let form41AttachementsUrl = mediaCloudUrl + 'form41/';

      $.ajax ( {
        type: 'POST',
        url: form41AttachementsUrl,
        enctype: ' multipart/form-data',
        data: this.attachment['document'],
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
         // window.location.href= '/entrys-of-premise';
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("=====uploading system error ========");
        }
      } );

      //   $.ajax ( {
      //   type: 'POST',
      //   url: form41sUrl,
      //   enctype: ' multipart/form-data',
      //   data: formData,
      //   cache: false,
      //   processData: false,
      //   contentType: false,
      //   crossDomain: true,
      //   xhrFields: { withCredentials: true },
      //   beforeSend: function (xhr) { 
      //     console.log('setting credentials.......');
          
      //   },
      //   success: function(data) { 
      //     console.log("=====Sent successfully to the database========");
      //     toastr.success("Success", 'Form 41 saved successfully');
      //     window.location.href= '/entrys-of-premise';
      //   },
      //   error: function(jqXHR, textStatus, errorThrown) {
      //     console.log("=====uploading system error ========");
      //   }
      // } );
  }

}
