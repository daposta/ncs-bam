import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UsersService} from '../../services/users.service';

declare var $: any;
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
   providers : [UsersService, ]
})
export class MyProfileComponent implements OnInit {
  
   user: any= {};
   org:any= {};
   // userInfo: any= {};
   error :any;

  constructor(private toastr: ToastsManager, private _vcr: ViewContainerRef, private userSrv: UsersService) {
   this.toastr.setRootViewContainerRef(_vcr); }

  ngOnInit() {
  	if(localStorage.getItem('user')){
  		this.user = JSON.parse(localStorage.getItem('user'));
      this.getUserInfo();
    
  	}
  	

  }

  companyInfo(){

    let postInfoTOBCURL= "http://129.157.177.159:3100/bcsgw/rest/v1/transaction/invocation";
    console.log(this.user.userid);
    let data = {
        "channel":"testorderer",
        "chaincode":"exciseprocess",
        "method":"createTrader",
        "args":[this.org['companyname'],this.org['rcnumber'], this.org['tinnumber'],
        "[48 70 48 16 6 7 42 134 72 207 61 2 1 6 5 43 199 4 0 33 3 58 0 4 21 162 242 81 40 78 13 26 160 33 97 191 210 22 152 134 162 66 12 77 221 129 138 60 74 243 198 34 102 209 14 48 16 2 20 96 172 47 170 216 228 169 103 121 153 100 84 111 33 13 106 42 46 227 52 91]"],
        "chaincodeVer":"v1"
     };
     let jsonData = JSON.stringify(data);
     
     //{"tin" : this.org.tin,"rcNumber": this.org.rcNumber};
    var toastr = this.toastr;
    var new_org = this.org;
    var userID = this.user.userid;

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
               let orgData = new FormData()
                 orgData.append('CompanyName', new_org['companyname'] );
                 orgData.append('DescriptionOfBusiness',new_org['descriptionofbusiness'] );
                 orgData.append('PurposeOfBusiness', new_org['purposeofbusiness'] );
                 orgData.append('RCNumber', new_org['rcnumber'] );
                 orgData.append('TinNumber', new_org['tinnumber'] );
                 orgData.append('userId', userID);
                  orgData.append('isAdmin', '0' );

                  let profileUrl = "https://129.144.154.136/ords/pdb1/ncs/system/userinfo/";

                   $.ajax ( {
                      type: 'POST',
                      url: profileUrl,
                      enctype: ' multipart/form-data',
                      data: orgData,
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
                        toastr.success("Success", 'Profile saved successfully');
                        window.location.href= '#/';
                      },
                      error: function(jqXHR, textStatus, errorThrown) {
                        console.log("=====uploading system error ========");
                      }
                    } );


               // toastr.success("Success", 'Upload Successful');

             
              },
              error: function(jqXHR, textStatus, errorThrown) {
                console.log("=====uploading system error ========");
                console.log(jqXHR);
                console.log(textStatus);
              }
            } );

  };


  getUserInfo(){
    this.userSrv.getUserInfoByID(this.user.userid).then(response => {
       if(response.items.length> 0){
            this.org = response.items[0];
       }
     
    })
    .catch(err => this.error = err)

  }

}
