import { Component, OnInit } from '@angular/core';
import { RoleAccessService } from '../../services/role-access.service';
import { RolesService} from '../../services/roles.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers : [RolesService, RoleAccessService]
})
export class SidebarComponent implements OnInit {
   user: any= {};
   roleAccess: any= {};
   error: any;  
     roles: any[];
    roleID: any;

  constructor( private rolesSrv : RolesService, private accessSrv: RoleAccessService) { 
  }

  ngOnInit() {
    let tempUser =  localStorage.getItem('user');
    if(tempUser){
      this.user = JSON.parse(tempUser);
    }
	 this.fetchUserRoleAccess();
	 this.fetchRoles();
  }


  fetchUserRoleAccess(){
     this.accessSrv.findAccessByUserID(localStorage.getItem('userid')).
    then(response=> {
      this.roleAccess = response.items[0];
     
       localStorage.setItem('userRoleId', this.roleAccess['idrole'])
       //this.roleID = this

    })
    .catch(err => this.error = err )
  };


   fetchRoles(){
    this.rolesSrv.fetchRoles()
    .then(response => {this.roles = response.items})
    .catch(err => this.error = err);
  };

	  

}
