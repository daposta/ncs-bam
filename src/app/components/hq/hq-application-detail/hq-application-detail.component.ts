import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Form41sService} from '../../../services/form41s.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;

@Component({
  selector: 'app-hq-application-detail',
  templateUrl: './hq-application-detail.component.html',
  styleUrls: ['./hq-application-detail.component.css'],
    providers : [Form41sService, ]

})
export class HqApplicationDetailComponent implements OnInit {

	 application: Object= {};
 	error: any;	
  constructor( private form41Srv: Form41sService, private route: ActivatedRoute,  private toastr: ToastsManager,
   private _vcr: ViewContainerRef) { 
  		this.toastr.setRootViewContainerRef(_vcr);
  	}

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
