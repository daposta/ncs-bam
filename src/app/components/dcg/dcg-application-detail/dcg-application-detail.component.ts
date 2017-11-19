import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Form41sService} from '../../../services/form41s.service';

@Component({
  selector: 'app-dcg-application-detail',
  templateUrl: './dcg-application-detail.component.html',
  styleUrls: ['./dcg-application-detail.component.css'],
  providers : [Form41sService, ]

})
export class DcgApplicationDetailComponent implements OnInit {
	
   application: Object= {};
 	error: any;	
  constructor(private form41Srv: Form41sService, private route: ActivatedRoute) { }

  ngOnInit() {
  		this.getDetail();
  }


    getDetail(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.form41Srv.findForm41ByID(+ params['id']))
		 .subscribe(
		 	data =>this.application = data.items[0]	);


  }


}
