import { Component, OnInit } from '@angular/core';
import { Form41sService} from '../../services/form41s.service';

@Component({
  selector: 'app-new-form-41',
  templateUrl: './new-form-41.component.html',
  styleUrls: ['./new-form-41.component.css'],
  providers : [Form41sService, ]

})
export class NewForm41Component implements OnInit {

  f41: any= {};
  constructor(private form41Srv: Form41sService) { }

  ngOnInit() {
  	console.log( localStorage.getItem('uid'));
  	// if(!localStorage.getItem('user')){

  	// };
  };

  save(){


    let formData = new FormData();
    let userId = localStorage.getItem('userid');
    let ref = this.makeid();
   
    this.f41['userid'] = userId;
    this.f41['ref'] = ref;
    this.f41['status'] = 'Pending';
   formData.append('iduser',  this.f41['userid'] );
   formData.append('formref',this.f41['ref']);
   formData.append('cname', this.f41['name']);
   formData.append('registeredaddress', this.f41['address']);
   formData.append('descriptionofbusiness', this.f41['description']);
    formData.append('purposeofbusiness', this.f41['purpose']);
    formData.append('status', this.f41['status'] );
  
  	console.log(formData);
    
    this.form41Srv.save(formData);

  }


   makeid() {
		  var text = "";
		  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		  for (var i = 0; i < 10; i++)
		    text += possible.charAt(Math.floor(Math.random() * possible.length));

		  return text;
	}


}
