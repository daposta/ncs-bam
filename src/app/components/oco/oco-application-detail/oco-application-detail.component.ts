import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Form41sService} from '../../../services/form41s.service';

@Component({
  selector: 'app-oco-application-detail',
  templateUrl: './oco-application-detail.component.html',
  styleUrls: ['./oco-application-detail.component.css'],
   providers : [Form41sService, ]

})
export class OcoApplicationDetailComponent implements OnInit {
  
  application: Object= {};
 	error: any;	

  constructor(private form41Srv: Form41sService, private route: ActivatedRoute) { }

  ngOnInit() {
  		this.getDetail()
  }

   getDetail(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.form41Srv.findForm41ByID(+ params['id']))
		 .subscribe(
		 	data =>this.application = data.items[0]	);


  }

}
