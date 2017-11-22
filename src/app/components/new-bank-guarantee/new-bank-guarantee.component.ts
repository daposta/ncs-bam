import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;


@Component({
  selector: 'app-new-bank-guarantee',
  templateUrl: './new-bank-guarantee.component.html',
  styleUrls: ['./new-bank-guarantee.component.css']
})
export class NewBankGuaranteeComponent implements OnInit {
 
 guarantee:any= {};
  constructor(private toastr: ToastsManager, private _vcr: ViewContainerRef) {
  		this.toastr.setRootViewContainerRef(_vcr); 
   }

  ngOnInit() {
  }

  sendBankGuarantee(){

    let postInfoTOBCURL= "http://129.157.177.159:3100/bcsgw/rest/v1/transaction/invocation";
    console.log(this.guarantee['bank']);
    console.log(this.guarantee);
    let data = {
			"channel":"testorderer",
			"chaincode":"bankchain",
			"method":"createBankGuarntee",
			"args":[this.guarantee['beneficiary'], this.guarantee['rcNumber'], this.guarantee['tin'],
			this.guarantee['bank'], this.guarantee['ref'], this.guarantee['amount'],
			 this.guarantee['msg']],
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
                toastr.success("Success", 'Guarantee save Successful');

             
              },
              error: function(jqXHR, textStatus, errorThrown) {
                console.log("=====uploading system error ========");
                console.log(jqXHR);
                console.log(textStatus);
              }
            } );

  }


}
