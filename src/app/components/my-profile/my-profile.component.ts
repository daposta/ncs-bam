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

    let postInfoTOBCURL= "http://129.157.177.159:3100/bcsgw/rest/v1/transaction/invocation";
    console.log(this.org['orgName']);
    let data = {
        "channel":"testorderer",
        "chaincode":"exciseprocess",
        "method":"createTrader",
        "args":[this.org['orgName'],this.org['rcNumber'], this.org['tin'],
        "[48 70 48 16 6 7 42 134 72 207 61 2 1 6 5 43 199 4 0 33 3 58 0 4 21 162 242 81 40 78 13 26 160 33 97 191 210 22 152 134 162 66 12 77 221 129 138 60 74 243 198 34 102 209 14 48 16 2 20 96 172 47 170 216 228 169 103 121 153 100 84 111 33 13 106 42 46 227 52 91]"],
        "chaincodeVer":"v1"
     };
     let jsonData = JSON.stringify(data);
     console.log(typeof(jsonData));
     console.log(jsonData);
     //{"tin" : this.org.tin,"rcNumber": this.org.rcNumber};
    var toastr = this.toastr;

    $.ajax ( {
              type: 'POST',
              url: postInfoTOBCURL,
              //enctype: ' application/json',
              data: jsonData,
              cache: false,
              processData: false,
              contentType: 'application/json',
              crossDomain: true,
              xhrFields: { withCredentials: true },
              beforeSend: function (xhr) { 
                console.log('setting credentials.......');
                
              },
              success: function(data) { 
                console.log("=====Sent successfully to the database========");
                console.log(data);
                toastr.success("Success", 'Upload Successful');

             
              },
              error: function(jqXHR, textStatus, errorThrown) {
                console.log("=====uploading system error ========");
                console.log(jqXHR);
                console.log(textStatus);
              }
            } );

  }

}
