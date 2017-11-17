import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Form41sService} from '../../services/form41s.service';


@Component({
  selector: 'app-entrys-of-premise-detail',
  templateUrl: './entrys-of-premise-detail.component.html',
  styleUrls: ['./entrys-of-premise-detail.component.css'],
   providers : [Form41sService, ]

})
export class EntrysOfPremiseDetailComponent implements OnInit {

  entry_of_premise: Object= {};
 	error: any;	
  constructor(private form41Srv: Form41sService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getDetail()
  }


  getDetail(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.form41Srv.findForm41ByID(+ params['id']))
		 .subscribe(
		 	data =>this.entry_of_premise = data.items[0]	);


  }

}
