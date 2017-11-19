import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { UsersService} from '../../services/users.service';
import { RolesService} from '../../services/roles.service';
import { ZonesService} from '../../services/zones.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;

@Component({
  selector: 'app-register-as-admin',
  templateUrl: './register-as-admin.component.html',
  styleUrls: ['./register-as-admin.component.css'],
  providers : [UsersService, RolesService,ZonesService ]

})
export class RegisterAsAdminComponent implements OnInit {
  newUser: any= {};
  error: any;	
  roles: any[];
  zones: any[];
  data;

  constructor(private rolesSrv : RolesService, private zonesSrv : ZonesService, 
  	private userSrv : UsersService, private toastr: ToastsManager, 
  private _vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(_vcr)
  }

  ngOnInit() {
  	this.fetchRoles();
  	this.fetchZones();
    this.newUser.role = -1;
    this.newUser.zone = -1;
    //this.toastr.success("Success", 'You are on right track.');
  }


  fetchRoles(){
  	this.rolesSrv.fetchRoles()
  	.then(response => {this.roles = response.items})
  	.catch(err => this.error = err);
  };

  fetchZones(){
  	this.zonesSrv.fetchZones().then(response => this.zones = response.items)
  	.catch(err => this.error = err)

  };

  registerAdminUser(){;
   
    if(!localStorage.getItem('userid') ||localStorage.getItem('userid')=="NaN"){
      // this.newUser.UserId ="1000";
      this.newUser.UserId = this.makeid();
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
    
    let newID = Number(this.newUser.UserId) + 1;
    localStorage.setItem('uid', newID.toString() );
    let  usersUrl = "https://129.144.154.136/ords/pdb1/ncs/system/users/";
    let toastr = this.toastr;
    var v = this.newUser;
    
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
          let  roleAccessUrl = "https://129.144.154.136/ords/pdb1/ncs/system/roleaccess/";
          //toastr.success("Success", 'Registration Successful');
          console.log(v);
          let _formData = new FormData();
           _formData.append('userid' ,v.UserId);
            _formData.append('idrole', v.role );
          _formData.append('idzone' ,  v.zone );
          

           $.ajax({
            url: roleAccessUrl,
            type: 'POST',
            enctype: ' multipart/form-data',
            data: _formData,
            cache: false,
            processData: false,
            contentType: false,
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function(data){
                 console.log("=====Sent 2 successfully to the database========");
                 toastr.success("Success", 'Registration Successful');
                 window.location.href="/login"

            },
             error: function(jqXHR, textStatus, errorThrown) {
                console.log("=====uploading system error ========");
            }
        });

          //window.location.href= '/login';
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("=====uploading system error ========");
        }
      } );
    
  }


  makeid() {
      var text = "";
      var possible = "0123456789";

      for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }

}
