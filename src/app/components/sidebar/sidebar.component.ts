import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	menuList:any;
  selected:any;
  constructor() { 
  }

  ngOnInit() {

  	this.menuList = [{
		"name": "Angular",
		"subMenu": ["Anguler 1", "Angular 2"]
		}, {
			"name": "Javascript",
			"subMenu": ["Jquery", "Ajax"]
		}, {
			"name": "Bootstrap",
			"subMenu": ["BootStrap 2", "BootStrap 3"]
		}]
		          
		  
		 
	  }

	  select(item:any){
		     this.selected = (this.selected === item ? null : item);
		  };

		  isActive(item:any){
		    return this.selected === item;
		  };

}
