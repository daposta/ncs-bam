import { Component, OnInit } from '@angular/core';
import { ZonesService} from '../../services/zones.service';

@Component({
  selector: 'app-new-zone',
  templateUrl: './new-zone.component.html',
  styleUrls: ['./new-zone.component.css'],
     providers : [ZonesService, ]

})
export class NewZoneComponent implements OnInit {
 
 zone: any= {};
  constructor(private zoneSrv: ZonesService) { }

  ngOnInit() {
  }


 saveZone(){

   let slug = this.slugify(this.zone['name']);
    let formData = new FormData();
   formData.append('name', this.zone['name']);
   formData.append('slogName', slug);
    
    
    this.zoneSrv.saveZone(formData);


 }


 slugify(text)
	{
	  return text.toString().toLowerCase()
	    .replace(/\s+/g, '-')           // Replace spaces with -
	    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
	    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
	    .replace(/^-+/, '')             // Trim - from start of text
	    .replace(/-+$/, '');            // Trim - from end of text
	}


}
