import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Form41sService} from '../../services/form41s.service';
import { UploadsService} from '../../services/uploads.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

declare var $: any;

@Component({
  selector: 'app-entrys-of-premise-detail',
  templateUrl: './entrys-of-premise-detail.component.html',
  styleUrls: ['./entrys-of-premise-detail.component.css'],
   providers : [Form41sService, UploadsService]

})
export class EntrysOfPremiseDetailComponent implements OnInit {

  entry_of_premise: Object= {};
 	error: any;	
  form41Uploads:any[] = [];
  supportingDoc: any= {};
  _doc :any;

  form41Docs:any[] = [];


  

  constructor(private form41Srv: Form41sService, private route: ActivatedRoute,private toastr: ToastsManager, 
    private _vcr: ViewContainerRef, private uploadsSrv: UploadsService) { 
        this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
  	this.getDetail()
   

  }


  getDetail(){
  	 this.route.params.switchMap((params: Params) => 
		 	this.form41Srv.findForm41ByID(+ params['id']))
		 .subscribe(
		 	data =>{
         this.entry_of_premise = data.items[0] ;
           console.log('======');
           console.log(this.entry_of_premise);
           this.fetchImagesForForm41(this.entry_of_premise['idform']);
           console.log(this.form41Docs);
       });

  }

  uploadFile(){
   //check if dir exists, if not create a new one
    
    let searchURL = 'https://documents-gse00012792.documents.us2.oraclecloud.com/documents/api/1.2/folders/search/items?fulltext=';
    let folderName = 'Form 41';
    let fullFolderSearchURL = searchURL + folderName;

    var toastr = this.toastr;
    var filesData = this.form41Uploads;
   
    //check if folder already exists
    var doc = this._doc
    var form41 = this.entry_of_premise;
   
    let username ='bala.gupta';
    let password ='LifeliKe@6Lamb';
    event.preventDefault();
    $.ajax
        ({
          type: "GET",
          url: fullFolderSearchURL,
          async: false,
          beforeSend: function (xhr) {
              xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
             xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:4200");
          },
          success: function (data, status){
             
             if(data.totalCount > 0 ){
                 //upload files to directory

                 let parentFolderID = data.items[0]['id'];
               
                 let uploadDirURL = 'https://documents-gse00012792.documents.us2.oraclecloud.com/documents/api/1.2/files/data';
                 //{"parentID": "FAB43E7945CD74F22A2A8D920CA5E537F54010EF7DE2"}
                 let postData = new FormData();
               
                 postData.append('jsonInputParameters','{"parentID": "F0917D035B670E235B5C7BE50CA5E537F54010EF7DE2"}');

                 postData.append('primaryFile', doc);
              
                 $.ajax ( {
                    type: 'POST',
                    url: uploadDirURL,
                    enctype: ' multipart/form-data',
                    data: postData,
                    cache: false,
                    processData: false,
                    contentType: false,
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    beforeSend: function (xhr) { 
                      console.log('setting credentials.......');
                         xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
                          xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                          
                    },
                    success: function(response) { 
                      console.log("=====Sent successfully========");

                      //send attachment to db
                      let imageID = response['id'];
                      let attachementURL ='https://129.144.154.136/ords/pdb1/ncs/system/form41attachment/';
                      let attachmentData = new FormData();
                      console.log('===' + form41['idform']);
                      attachmentData.append('idForm', form41['idform']);
                      attachmentData.append('image',imageID);
                      attachmentData.append('title', "*****");
                      attachmentData.append('description' ,"*****");
                       attachmentData.append('Status' , "Done");


                         $.ajax ( {
                              type: 'POST',
                              url: attachementURL,
                              enctype: ' multipart/form-data',
                              data: attachmentData,
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

                                toastr.success("Success", 'Upload Successful');

                             
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
          }
      });

  };


  addDocument($event, t){
  

    let  files = $event.target.files || $event.srcElement.files;
   //this.form41Uploads.push(files[0]);
   this._doc = files[0];
  

  }

  fetchImagesForForm41(formID:any){
    console.log('prrrrr');
    this.uploadsSrv.findDocsbyFormID(formID).then(response => {
      this.form41Docs = response.items;
      console.log( this.form41Docs);
   })
    .catch(error => this.error = error);

  }

  fetchThumbnailsFromIDs(imageIDs:any[]){
    let thumbnails:any[];
    let thumbnailURL ='https://documents-gse00012792.documents.us2.oraclecloud.com/documents/api/1.2/files/DA5878F4B1A4FEE0DA334AE40CA5E537F54010EF7DE2/data/thumbnail';
    imageIDs.forEach(function(item){
     // thumbnails.push(item.);
         $.ajax ( {
              type: 'POST',
              url: thumbnailURL,
              enctype: ' multipart/form-data',
              data: 'attachmentData',
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

                //toastr.success("Success", 'Upload Successful');

             
              },
              error: function(jqXHR, textStatus, errorThrown) {
                console.log("=====uploading system error ========");
              }
            });

    });
  }

}
