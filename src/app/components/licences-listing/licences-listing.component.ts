import { Component, OnInit } from '@angular/core';
import { LicencesService} from '../../services/licences.service';

@Component({
  selector: 'app-licences-listing',
  templateUrl: './licences-listing.component.html',
  styleUrls: ['./licences-listing.component.css'],
  providers : [LicencesService,  ]

})
export class LicencesListingComponent implements OnInit {

  licences: any[];
 	error: any;
 	search: string ="" ;
  constructor(private licenceServ: LicencesService) { }

  ngOnInit() {
  }

  fetchLicences(){
  	//this.fetchLicences.fet
  }

}
