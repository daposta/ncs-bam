import { Component, OnInit } from '@angular/core';

import { Form41sService} from '../../../services/form41s.service';

@Component({
  selector: 'app-cac-entrys-of-premise',
  templateUrl: './cac-entrys-of-premise.component.html',
  styleUrls: ['./cac-entrys-of-premise.component.css'],
     providers : [Form41sService, ]
})
export class CacEntrysOfPremiseComponent implements OnInit {

   forms: any[];
 	error: any;
  constructor(private form41Srv: Form41sService) { }

  ngOnInit() {
  	this.fetchForm41s();
  }

  fetchForm41s(){

  	this.form41Srv.fetchForm41().then(result => this.forms = result.items)
  	.catch(err => this.error = err);
  };

}
