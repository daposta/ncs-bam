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
   
   // this.fetchUsers();

  }

  register(){
    console.log('papapa');
    console.log(localStorage);
    console.log(localStorage.getItem('uid'));
    if(!localStorage.getItem('uid') ||localStorage.getItem('uid')=="NaN"){
       this.newUser.UserId ="230";
     }else{
       this.newUser.UserId = localStorage.getItem('uid');
     }
     console.log(this.newUser.UserId);
   

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
    console.log('newid>>>' + newID);
    localStorage.setItem('uid', newID.toString() );
    //this.newUser['ConfirmPassword'] = '';
    this.userSrv.register(formData);
  }


  fetchUsers(){
    this.userSrv.fetchUsers()
            .then(res => this.users = res)
            .catch(error => this.error = error);
  }

}
