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
  constructor(private form41: Form41sService) { }

  ngOnInit() {
  }

  save(){

  }

}
