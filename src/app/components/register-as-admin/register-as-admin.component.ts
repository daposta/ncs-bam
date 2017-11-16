import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { UsersService} from '../../services/users.service';
import { RolesService} from '../../services/roles.service';
import { ZonesService} from '../../services/zones.service';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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

  constructor(private rolesSrv : RolesService, private zonesSrv : ZonesService, 
  	private userSrv : UsersService, ) { 
   // this.toastr.setRootViewContainerRef(_vcr);
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

  saveAdminUser(){

  }

}
