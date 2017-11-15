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

     // let body = document.getElementsByTagName("body")[0];
    //  body.classList.remove("className");   //remove the class
    //  body.classList.add("skin-blue sidebar-mini");   //add the class
    document.body.classList.add("skin-blue");
    document.body.classList.add("sidebar-mini");
  }

}
