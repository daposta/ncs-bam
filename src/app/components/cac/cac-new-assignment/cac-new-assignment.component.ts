import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UsersService} from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;

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
  private _vcr: ViewContainerRef) { 
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
  	console.log('saving...');

    let formData = new FormData();
    let userId = localStorage.getItem('userid');
    let AssignmentRef = this.makeRef();
   
    this.assignment['userid'] = userId;
    this.assignment['idForm'] = this.formID;
     this.assignment['AssignmentRef'] = AssignmentRef;
     this.assignment['dateCreated'] = new Date().getDate() + ' 00:00:00';
      this.assignment['dd'] = new Date(this.assignment['DueDate']); //+ ' 00:00:00';
    this.assignment['status'] = 'Pending';
   formData.append('idForm',  this.assignment['idForm'] );
   formData.append('idPrincipal',this.assignment['userid']);
   formData.append('AssignmentRef', this.assignment['AssignmentRef']);
   formData.append('Description', this.assignment['description']);
   formData.append('DateCreated', this.assignment['description']);
    formData.append('DueDate', this.assignment['dd']);
    formData.append('DueDate', this.assignment['purpose']);
    formData.append('status', this.assignment['status'] );

    console.log(this.assignment);

    let toastr = this.toastr;
  
  	 // this.form41Srv.save(formData);
    let form41sUrl = "https://129.144.154.136/ords/pdb1/ncs/system/assignment/";

      //   $.ajax ( {
      //   type: 'POST',
      //   url: form41sUrl,
      //   enctype: ' multipart/form-data',
      //   data: formData,
      //   cache: false,
      //   processData: false,
      //   contentType: false,
      //   crossDomain: true,
      //   xhrFields: { withCredentials: true },
      //   beforeSend: function (xhr) { 
      //     console.log('setting credentials.......');
          
      //   },
      //   success: function(data) { 
      //     console.log("=====Sent successfully to the database========");
      //     toastr.success("Success", 'Form 41 saved successfully');
      //     window.location.href= '/entrys-of-premise';
      //   },
      //   error: function(jqXHR, textStatus, errorThrown) {
      //     console.log("=====uploading system error ========");
      //   }
      // } );

  }

   makeRef() {
		  var text = "";
		  var possible = "0123456789";

		  for (var i = 0; i < 4; i++)
		    text += possible.charAt(Math.floor(Math.random() * possible.length));

		  return text;
	}

}
