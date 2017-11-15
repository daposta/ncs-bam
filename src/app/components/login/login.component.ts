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

  }

}
