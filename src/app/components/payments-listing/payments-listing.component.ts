import { Component, OnInit } from '@angular/core';
import { PaymentsService} from '../../services/payments.service';

@Component({
  selector: 'app-payments-listing',
  templateUrl: './payments-listing.component.html',
  styleUrls: ['./payments-listing.component.css'],
    providers : [PaymentsService, ]

})
export class PaymentsListingComponent implements OnInit {
  
  payments: any[];
 	error: any;
 	search: string ="" ;
  constructor() { }

  ngOnInit() {
  }

}
