import { Component, OnInit } from '@angular/core';
import { Form41sService} from '../../services/form41s.service';

@Component({
  selector: 'app-entrys-of-premise-listing',
  templateUrl: './entrys-of-premise-listing.component.html',
  styleUrls: ['./entrys-of-premise-listing.component.css'],
   providers : [Form41sService, ]
})
export class EntrysOfPremiseListingComponent implements OnInit {

   forms: any[];
 	error: any;
  constructor(private form41Srv: Form41sService) { }

  ngOnInit() {
  	this.fetch41ByUser()
  }


  // fetchForm41s(){

  // 	this.form41Srv.fetchForm41().then(result => this.forms = result.items)
  // 	.catch(err => this.error = err);
  // };


  fetch41ByUser(){
    let userID = localStorage.getItem('userid');
    this.form41Srv.findForm41ByUserID(userID).then(result => this.forms = result.items)
    .catch(err => this.error = err)
  }


}
