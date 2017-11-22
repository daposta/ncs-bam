import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})
export class NewPaymentComponent implements OnInit {
  
  payment: any= {};
  error: any;	
  constructor(private toastr: ToastsManager, private _vcr: ViewContainerRef) { 
   		this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
  };

  makePayment(){
  	let paymentUrl = 'http://129.157.177.159:3100/bcsgw/rest/v1/transaction/invocation';
  	let invoiceNumber = "invoice" + this.makeRef();

	let data = {
	"channel":"testorderer",
	"chaincode":"exciseprocess",
	"method":"createlicencePayment",
	"args":[invoiceNumber,"14000","ref1100101", "14000", "Complete", "Lawore Cement Factory"],
	"chaincodeVer":"v1"
	};
     let jsonData = JSON.stringify(data);
     
     //{"tin" : this.org.tin,"rcNumber": this.org.rcNumber};
    	var toastr = this.toastr;

    	$.ajax ( {
              type: 'POST',
              url: paymentUrl,
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
              	if(data.returnCode="Success"){
              		
               		 toastr.success("Success", 'Payment Successful');
               		 window.location.href="#/payment-invoice"
              	}
               

             
              },
              error: function(jqXHR, textStatus, errorThrown) {
                console.log("=====uploading system error ========");
                console.log(jqXHR);
                console.log(textStatus);
              }
            } );

  };

  makeRef() {
      var text = "";
      var possible = "0123456789";

      for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }

}
