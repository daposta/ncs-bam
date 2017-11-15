import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [UsersService, ]
})
export class LoginComponent implements OnInit {
 

  user: any= {};
  constructor(private userSrv: UsersService) { }

  ngOnInit() {
  }

  login(){

  	this.userSrv.findUserByEmail(this.user['email'])
  	.then(result => {
  		
  		if(result.items.length > 0){
  			if(result.items[0].password === this.user.password){
  				localStorage.setItem('user', this.user);
  				window.location.href = '/';
  			}
  			else{
  				console.log('No user with matching credentials');
  			}

  		}else{
  			console.log('User with email does not exists');
  		}
  		

  	})
  	.catch(error =>{
  		console.log(error);
  	})


  }

}
