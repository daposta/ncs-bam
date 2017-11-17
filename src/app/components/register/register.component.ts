import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;

import { UsersService} from '../../services/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [UsersService, ]
})

export class RegisterComponent implements OnInit {


  newUser: any= {};
  error: any;	
  users: any[];
  //formData: FormData;

  constructor(private userSrv: UsersService,private toastr: ToastsManager, 
  private _vcr: ViewContainerRef,) {
      this.toastr.setRootViewContainerRef(_vcr);
   }

  ngOnInit() {
   
   // this.fetchUsers();

  }

  register(){
   
    if(!localStorage.getItem('userid') ||localStorage.getItem('userid')=="NaN"){
       this.newUser.UserId ="230";
     }else{
       this.newUser.UserId = localStorage.getItem('userid');
     }
     
    let formData = new FormData();
    formData.append('FirstName', this.newUser['FirstName']);
    formData.append('LastName', this.newUser['LastName']);
    formData.append('Phone', this.newUser['Phone']);
    formData.append('Email' ,this.newUser['Email']);
    formData.append('Password', this.newUser['Password']);
    formData.append('UserId' , this.newUser['UserId']);
    // formData.append('UserId', '911');
    //   formData.append('Email', 'leke@me.com');
    //   formData.append('Phone', '07066655543');
    //   formData.append('FirstName', 'Leke');
    //   formData.append('LastName', 'Alao');
    //   formData.append('Password', 'errytr-=ouokj');
    let newID = Number(this.newUser.UserId) + 1;
    localStorage.setItem('uid', newID.toString() );

    let  usersUrl = "https://129.144.154.136/ords/pdb1/ncs/system/users/";
    let toastr = this.toastr;
    console.log(formData);

     $.ajax ( {
        type: 'POST',
        url: usersUrl,
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

          toastr.success("Success", 'Registration Successful');

          window.location.href= '/login';
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("=====uploading system error ========");
        }
      } );
    
  }


  // fetchUsers(){
  //   this.userSrv.fetchUsers()
  //           .then(res => this.users = res)
  //           .catch(error => this.error = error);
  // }

}
