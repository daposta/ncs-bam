import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  
   user: any= {};
  constructor() { }

  ngOnInit() {
  	if(localStorage.getItem('user')){
  		this.user = JSON.parse(localStorage.getItem('user'));
  	}
  	

  }

}
