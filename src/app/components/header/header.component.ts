import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      let body = document.getElementsByTagName('body')[0];
    //  body.classList.remove("className");   //remove the class
      body.classList.add("skin-blue sidebar-mini");   //add the class
  }

}
