import { Component, OnInit } from '@angular/core';
import { ZonesService} from '../../services/zones.service';


@Component({
  selector: 'app-zones-listing',
  templateUrl: './zones-listing.component.html',
  styleUrls: ['./zones-listing.component.css'],
   providers : [ZonesService, ]

})
export class ZonesListingComponent implements OnInit {
  
  zones: any[];
 	error: any;
 	search: string ="" ;

  constructor(private zoneSrv: ZonesService) { }

  ngOnInit() {
  	this.fetchZones();
  }

  fetchZones(){

  	this.zoneSrv.fetchZones().then(result => this.zones = result.items)
  	.catch(err => this.error = err);
  };

}
