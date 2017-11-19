import { Component, OnInit } from '@angular/core';
import { AssignmentsService} from '../../../services/assignments.service';

@Component({
  selector: 'app-cac-assignments-listing',
  templateUrl: './cac-assignments-listing.component.html',
  styleUrls: ['./cac-assignments-listing.component.css'],
   providers : [AssignmentsService]

})
export class CacAssignmentsListingComponent implements OnInit {
 

 assignments: any[];
 error: any;
  constructor(private assignmentsSrv: AssignmentsService) { }

  ngOnInit() {

  	this.fetchAssignments();
  }

  fetchAssignments(){

  	this.assignmentsSrv.fetchAssignments().then(result => this.assignments = result.items)
  	.catch(err => this.error = err);
  };

}
