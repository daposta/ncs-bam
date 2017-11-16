import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-listing',
  templateUrl: './payments-listing.component.html',
  styleUrls: ['./payments-listing.component.css']
})
export class PaymentsListingComponent implements OnInit {
  payments: any[];
 	error: any;
 	search: string ="" ;
  constructor() { }

  ngOnInit() {
  }

}
