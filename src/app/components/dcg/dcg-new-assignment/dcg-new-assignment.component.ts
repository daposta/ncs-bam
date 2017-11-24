import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UsersService} from '../../../services/users.service';
import { AssignmentTypeService} from '../../../services/assignment-type.service';

import { ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;

@Component({
  selector: 'app-dcg-new-assignment',
  templateUrl: './dcg-new-assignment.component.html',
  styleUrls: ['./dcg-new-assignment.component.css'],
   providers : [UsersService, AssignmentTypeService ]
})
export class DcgNewAssignmentComponent implements OnInit {
   users: any[];
  assignmentTypes: any[];
  error: any;
  assignment: Object= {};
  formID :any;

  constructor(private route: ActivatedRoute, private userSrv: UsersService, private toastr: ToastsManager, 
  private _vcr: ViewContainerRef, private assignmentTypeSrv: AssignmentTypeService) { 
  this.toastr.setRootViewContainerRef(_vcr);
}

  ngOnInit() {
  	this.getFormID();
  	this.fetchOCOs();
    this.fetchAssignmentTypes();
  }

  fetchOCOs(){
  	this.userSrv.fetchUsers().then(response=> this.users = response.items)
  	.catch(err => this.error = err)
  }

  getFormID(){
  	 this.route.params.subscribe(params => {
      this.formID = params['formId']; // --> Name must match wanted parameter

    });
  }

  saveAssignment(){
  	let formData = new FormData();
    let userId = localStorage.getItem('userid');
    let AssignmentRef = this.makeRef();
   
    this.assignment['userid'] = userId;
    this.assignment['idForm'] = this.formID;
     this.assignment['AssignmentRef'] = AssignmentRef;
     this.assignment['dateCreated'] = new Date().getFullYear() +'-' + new Date().getMonth() + '-' 
     + new Date().getDate()+ ' 00:00:00';

       this.assignment['dd'] = this.assignment['dueDate']  + ' 00:00:00';
    this.assignment['status'] = 'Inspection';
   formData.append('idForm',  this.assignment['idForm'] );
   formData.append('idPrincipal',this.assignment['userid']);
   formData.append('AssignmentRef', this.assignment['AssignmentRef']);
   formData.append('Description', this.assignment['instruction']);
   formData.append('DateCreated', this.assignment['dateCreated']);
    formData.append('DueDate', this.assignment['dd']);
    formData.append('Status', this.assignment['status'] );
    formData.append('assignmentType', this.assignment['assignmentType'] );

    console.log(this.assignment);
    var _assigment = this.assignment;

    let toastr = this.toastr;

    let assignmentsUrl = "https://129.144.154.136/ords/pdb1/ncs/system/assignment/";
     // let formData = new FormData();

        $.ajax ( {
        type: 'POST',
        url: assignmentsUrl,
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
         
          // update form 41 status
          let formStatusUpdateUrl = 'https://129.144.154.136/ords/pdb1/ncs/system/form41/status/update/';
          
          $.ajax ( {
            type: 'PUT',
            url: formStatusUpdateUrl,
            enctype: 'multipart/form-data',
            //data: formData,
            headers: { 'id': _assigment['idForm'],
             'status': 'Inspection',
             },
            cache: false,
            processData: false,
            contentType: false,
            crossDomain: true,
            xhrFields: { withCredentials: true },
            beforeSend: function (xhr) { 
              console.log('setting credentials.......');
           
            },
            success: function(data) { 
              console.log("=====Sent updated form41 to the database========");
              toastr.success("Success", 'Assignment saved successfully');
              window.location.href= '#/dcg/manage-applications/' + _assigment['idForm'] ;
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log("=====uploading system error ========");
            }
          } );
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("=====uploading system error ========");
        }
      } );

  }

   makeRef() {
		  var text = "";
		  var possible = "0123456789";

		  for (var i = 0; i < 4; i++)
		    text += possible.charAt(Math.floor(Math.random() * possible.length));

		  return text;
	}

  fetchAssignmentTypes(){
    this.assignmentTypeSrv.fetchAssignmentTypess().then(response => this.assignmentTypes = response.items)
    .catch(error => this.error = error)
  }

}
