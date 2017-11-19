import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UsersService} from '../../services/users.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { RolesService} from '../../services/roles.service';
import { RoleAccessService } from '../../services/role-access.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [UsersService, RolesService, RoleAccessService]
})
export class LoginComponent implements OnInit {
 

  user: any= {};
  roleAccess: any= {};
  roles: any[];
  error: any;  
  constructor(private userSrv: UsersService,  private toastr: ToastsManager, 
    private _vcr: ViewContainerRef, private rolesSrv : RolesService, private accessSrv: RoleAccessService) { 
      this.toastr.setRootViewContainerRef(_vcr);
 }

  ngOnInit() {
   
  }

  login(){

  	this.userSrv.findUserByEmail(this.user['email'])
  	.then(result => {
  		localStorage.removeItem('user');
      localStorage.removeItem('userid');
  		if(result.items.length > 0){
  			if(result.items[0].password === this.user.password){
         
  				localStorage.setItem('user', JSON.stringify(result.items[0]));
            localStorage.setItem('userid', result.items[0].userid);
           
            
           
           let msg = 'Login successful';
          this.toastr.success("Success", msg);
  				window.location.href = '/';
  			}
  			else{
  				let msg = 'No user with matching credentials';
          this.toastr.error("Error", msg);
  			}

  		}else{
  			 let msg = 'User with email does not exists'
        this.toastr.error("Error", msg);
  		}
  		

  	})
  	.catch(error =>{
  		console.log(error);
  	})


  }

  fetchRoles(){
    this.rolesSrv.fetchRoles()
    .then(response => {this.roles = response.items})
    .catch(err => this.error = err);
  };

  fetchUserRoleAccess(){
     this.accessSrv.findAccessByUserID(localStorage.getItem('userid')).
    then(response=> {
      this.roleAccess = response.items[0];
      console.log('++++++');
      console.log( this.roleAccess);
    })
    .catch(err => this.error = err )
  }

}
