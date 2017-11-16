import { Component, OnInit } from '@angular/core';
import { LicencesService} from '../../services/licences.service';

@Component({
  selector: 'app-licences-listing',
  templateUrl: './licences-listing.component.html',
  styleUrls: ['./licences-listing.component.css']
})
export class LicencesListingComponent implements OnInit {

  licences: any[];
 	error: any;
 	search: string ="" ;
  constructor() { }

  ngOnInit() {
  }

}
