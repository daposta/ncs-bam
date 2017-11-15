import { Component, OnInit, AfterViewChecked } from '@angular/core';

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

  constructor(private userSrv: UsersService) {
   }

  ngOnInit() {
    console.log('skrraaaa');
    this.fetchUsers();

  }

  register(){
    if(!localStorage.getItem('uid')){
       this.newUser.UserId ="219";
     }else{
       this.newUser.UserID = localStorage.getItem('uid');
     }
     console.log(this.newUser.UserID);
   

    let formData = new FormData();
    formData.append('FirstName', this.newUser['FirstName']);
    formData.append('LastName', this.newUser['LastName']);
    formData.append('Phone', this.newUser['Phone']);
    formData.append('Email' ,this.newUser['FirstName']);
    formData.append('Password', this.newUser['Password']);
    formData.append('UserId' , this.newUser['UserId']);
    // formData.append('UserId', '911');
    //   formData.append('Email', 'leke@me.com');
    //   formData.append('Phone', '07066655543');
    //   formData.append('FirstName', 'Leke');
    //   formData.append('LastName', 'Alao');
    //   formData.append('Password', 'errytr-=ouokj');
    console.log(formData);
    localStorage.setItem('uid',  this.newUser.UserId+1 )
    //this.newUser['ConfirmPassword'] = '';
    this.userSrv.register(formData);
  }


  fetchUsers(){
    this.userSrv.fetchUsers()
            .then(res => this.users = res)
            .catch(error => this.error = error);
  }

}
