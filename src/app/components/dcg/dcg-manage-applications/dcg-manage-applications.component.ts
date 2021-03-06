import { Component, OnInit } from '@angular/core';
import { Form41sService} from '../../../services/form41s.service';

@Component({
  selector: 'app-dcg-manage-applications',
  templateUrl: './dcg-manage-applications.component.html',
  styleUrls: ['./dcg-manage-applications.component.css'],
  providers : [Form41sService, ]

})
export class DcgManageApplicationsComponent implements OnInit {

   applications: any[];
 	error: any;
  constructor(private form41Srv: Form41sService) { }

  ngOnInit() {
  	this.fetchForm41s();
  }

  
  fetchForm41s(){

  	this.form41Srv.fetchForm41().then(result => this.applications = result.items)
  	.catch(err => this.error = err);
  };

}
