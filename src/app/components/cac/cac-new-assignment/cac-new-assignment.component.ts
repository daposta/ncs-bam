import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UsersService} from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-cac-new-assignment',
  templateUrl: './cac-new-assignment.component.html',
  styleUrls: ['./cac-new-assignment.component.css'],
   providers : [UsersService, ]
})
export class CacNewAssignmentComponent implements OnInit {
  
  users: any[];
  error: any;
  assignment: Object= {};
  formID :any;
  constructor(private route: ActivatedRoute, private userSrv: UsersService, private toastr: ToastsManager, 
  private _vcr: ViewContainerRef,) { 
   this.toastr.setRootViewContainerRef(_vcr);
 }

  ngOnInit() {
  	this.getFormID();
  	this.fetchOCOs();
  }

  fetchOCOs(){
  	this.userSrv.fetchUsers().then(response=> this.users = response.items)
  	.catch(err => this.error = err)
  }

  getFormID(){
  	 this.route.params.subscribe(params => {
      this.formID = params['id']; // --> Name must match wanted parameter
    });
  }

  saveAssignment(){


    let formData = new FormData();
    let userId = localStorage.getItem('userid');
    let ref = this.makeid();
   
    this.assignment['userid'] = userId;
    this.assignment['ref'] = ref;
    this.assignment['status'] = 'Pending';
   formData.append('iduser',  this.assignment['userid'] );
   formData.append('formref',this.assignment['ref']);
   formData.append('cname', this.assignment['name']);
   formData.append('registeredaddress', this.assignment['address']);
   formData.append('descriptionofbusiness', this.assignment['description']);
    formData.append('purposeofbusiness', this.assignment['purpose']);
    formData.append('status', this.assignment['status'] );

    let toastr = this.toastr;
  
  	 // this.form41Srv.save(formData);
    let form41sUrl = "https://129.144.154.136/ords/pdb1/ncs/system/assignment/";

        $.ajax ( {
        type: 'POST',
        url: form41sUrl,
        enctype: ' multipart/form-data',
        data: formData,
        cache: false,
        processData: false,
        contentType: false,
        crossDomain: true,
        xhrFields: { withCredentials: true },
        beforeSend: function (xhr) { 
          console.log('setting credentials.......');
          
        },
        success: function(data) { 
          console.log("=====Sent successfully to the database========");
          toastr.success("Success", 'Form 41 saved successfully');
          window.location.href= '/entrys-of-premise';
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("=====uploading system error ========");
        }
      } );

  }

}
