import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  
   user: any= {};
   org:any= {};
  constructor(private toastr: ToastsManager, private _vcr: ViewContainerRef,) {
   this.toastr.setRootViewContainerRef(_vcr); }

  ngOnInit() {
  	if(localStorage.getItem('user')){
  		this.user = JSON.parse(localStorage.getItem('user'));
  	}
  	

  }

  companyInfo(){

    let postInfoTOBCURL= "";
    let data = {"tin" : this.org.tin,"rcNumber": this.org.rcNumber};
    var toastr = this.toastr;

    $.ajax ( {
              type: 'POST',
              url: postInfoTOBCURL,
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
                console.log("=====Sent successfully to the database========");

                toastr.success("Success", 'Upload Successful');

             
              },
              error: function(jqXHR, textStatus, errorThrown) {
                console.log("=====uploading system error ========");
              }
            } );

  }

}
