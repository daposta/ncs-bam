import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  bodyClasses:string = "skin-blue sidebar-mini";
  constructor() { }

  ngOnInit() {

    
    document.body.classList.add("skin-blue");
    document.body.classList.add("sidebar-mini");
  }

  logout(){
  	if(localStorage.getItem('userid')){
  		localStorage.removeItem('userid');
  		localStorage.removeItem('user');
  		window.location.href = '/login';
  	}
  }

}
