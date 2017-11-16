import { Component, OnInit } from '@angular/core';
import { Form41sService} from '../../services/form41s.service';

@Component({
  selector: 'app-new-form-41',
  templateUrl: './new-form-41.component.html',
  styleUrls: ['./new-form-41.component.css'],
  providers : [Form41sService, ]

})
export class NewForm41Component implements OnInit {

  Form41: any= {};
  constructor(private form41Srv: Form41sService) { }

  ngOnInit() {
  }

  save(){


    let formData = new FormData();
   formData.append('name', this.Form41['name']);
   formData.append('name', this.Form41['address']);
   formData.append('name', this.Form41['purpose']);
   formData.append('name', this.Form41['description']);
  
    
    this.form41Srv.save(formData);

  }

}
