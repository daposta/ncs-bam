import { Component, OnInit } from '@angular/core';

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

  constructor(private userSrv: UsersService) { }

  ngOnInit() {
  }

  register(){
    this.newUser.userid ="zumba";
    this.newUser.isaccountverified = 0;
    this.newUser.lastlogindate = "2017-11-14T13:55:18.223Z";
  	this.userSrv.register(this.newUser);
  }

}
