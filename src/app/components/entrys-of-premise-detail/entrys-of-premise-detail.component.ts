import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Form41sService} from '../../services/form41s.service';
import { UploadsService} from '../../services/uploads.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {DomSanitizer} from '@angular/platform-browser';

declare var $: any;

@Component({
    selector: 'app-entrys-of-premise-detail',
    templateUrl: './entrys-of-premise-detail.component.html',
    styleUrls: ['./entrys-of-premise-detail.component.css'],
    providers: [Form41sService, UploadsService]

})
export class EntrysOfPremiseDetailComponent implements OnInit {

    entry_of_premise: Object = {};
    error: any;
    form41Uploads: any[] = [];
    supportingDoc: any = {};
    _doc: any;

    form41Docs: any[] = [];




    constructor(private form41Srv: Form41sService, private route: ActivatedRoute, private toastr: ToastsManager,
        private _vcr: ViewContainerRef, private uploadsSrv: UploadsService, private _sanitizer: DomSanitizer) {
        this.toastr.setRootViewContainerRef(_vcr);
    }

    ngOnInit() {
        this.getDetail()


    }


    getDetail() {
        this.route.params.switchMap((params: Params) =>
            this.form41Srv.findForm41ByID(+ params['id']))
            .subscribe(
            data => {
                this.entry_of_premise = data.items[0];
                this.fetchImagesForForm41();
                console.log(this.form41Docs);
            });

    }

    uploadFile() {
        //check if dir exists, if not create a new one

        let searchURL = 'https://documents-gse00012792.documents.us2.oraclecloud.com/documents/api/1.2/folders/search/items?fulltext=';
        let folderName = 'Form 41';
        let fullFolderSearchURL = searchURL + folderName;

        var toastr = this.toastr;
        var filesData = this.form41Uploads;

        //check if folder already exists
        var doc = this._doc
        var form41 = this.entry_of_premise;

        let username = 'bala.gupta';
        let password = 'LifeliKe@6Lamb';
        event.preventDefault();
        $.ajax
            ({
                type: "GET",
                url: fullFolderSearchURL,
                async: false,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
                    xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:4200");
                },
                success: function (data, status) {

                    if (data.totalCount > 0) {
                        //upload files to directory

                        let parentFolderID = data.items[0]['id'];

                        let uploadDirURL = 'https://documents-gse00012792.documents.us2.oraclecloud.com/documents/api/1.2/files/data';
                        //{"parentID": "FAB43E7945CD74F22A2A8D920CA5E537F54010EF7DE2"}
                        let postData = new FormData();

                        postData.append('jsonInputParameters', '{"parentID": "F0917D035B670E235B5C7BE50CA5E537F54010EF7DE2"}');

                        postData.append('primaryFile', doc);

                        console.log(postData);

                        $.ajax({
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
                                xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
                                xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

                            },
                            success: function (response) {
                                console.log("=====Sent successfully========");

                                //send attachment to db
                                let imageID = response['id'];
                                let attachementURL = 'https://129.144.154.136/ords/pdb1/ncs/system/form41attachment/';
                                let attachmentData = new FormData();
                               
                                attachmentData.append('idForm', form41['IDFORM']);
                                attachmentData.append('image', imageID);
                                attachmentData.append('title', "*****");
                                attachmentData.append('description', "*****");
                                attachmentData.append('Status', "Done");


                                $.ajax({
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
                                    success: function (data) {
                                        console.log("=====Sent successfully to the database========");

                                        toastr.success("Success", 'Upload Successful');


                                    },
                                    error: function (jqXHR, textStatus, errorThrown) {
                                        console.log("=====uploading system error ========");
                                    }
                                });

                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                console.log("=====uploading system error ========");
                            }
                        });


                    }
                }
            });

    };


    addDocument($event, t) {


        let files = $event.target.files || $event.srcElement.files;
        //this.form41Uploads.push(files[0]);
        this._doc = files[0];


    }

    fetchImagesForForm41() {
        console.log('prrrrr');
        //let imgs = this.entry_of_premise['ATTACHMENTS'];
        if (this.entry_of_premise['ATTACHMENTS']) {
            this.fetchThumbnailsFromIDs(this.entry_of_premise['ATTACHMENTS']);
        }


    }

    fetchThumbnailsFromIDs(imageIDs: any[]) {
        let thumbnails = [];
        console.log(imageIDs);
        var new_santizer = this._sanitizer;
        let username = 'bala.gupta';
        let password = 'LifeliKe@6Lamb';
        console.log(this._sanitizer);
        //let _santizer = this._sanitizer;
        imageIDs.forEach(function (item) {
            // thumbnails.push(item.);
            
            console.log(item['IMAGE']);
            if(item['IMAGE'] !='*****'){

                   let thumbnailURL = 'https://documents-gse00012792.documents.us2.oraclecloud.com/documents/api/1.2/files/' + item['IMAGE'] + '/data/thumbnail';

                $.ajax({
                type: 'GET',
                url: thumbnailURL,
                async: false,
                headers: {'Content-Type': 'image/jpg'},
                 responseType: "blob",
                xhrFields: { withCredentials: true },
                beforeSend: function (xhr) {
                    console.log('setting credentials.......');
                    xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
                    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

                },
                success: function (data) {
                    console.log("=====Sent successfully to the database========");
                    //thumbnails.push(data);
                    let  urlCreator = window.URL;
                    console.log(new_santizer);
                     
                    //let imageURL = new_santizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(data));
                    let imageURL = new_santizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(data));

                    $('#ppp').prepend($('<img src=",' + imageURL + '"/>'));

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("=====uploading system error ========");
                }
            });
            }

            

        });

       
    }

    siteCompleted(){
        alert("completed");

        // update form 41 status
     let formApprovalUrl = 'https://129.144.154.136/ords/pdb1/ncs/system/form41/';
      let toastr = this.toastr; 
      var t = { 
              'idForm': this.entry_of_premise['IDFORM'],
             'comments':  this.entry_of_premise['COMMENTS'],
             'status': this.entry_of_premise['STATUS'],
              'cname': this.entry_of_premise['CNAME'] ,
               'registeredaddress':  this.entry_of_premise['REGISTEREDADDRESS'],
              'purposeofbusiness':  this.entry_of_premise['PURPOSEOFBUSINESS'],
               'descriptionofbusiness':  this.entry_of_premise['DESCRIPTIONOFBUSINESS'],
                'formref': this.entry_of_premise['FORMREF'],
               'iduser':  this.entry_of_premise['IDUSER'],
               'SITESTATUS':  "Construction Completed"
             };
  
    $.ajax ( {
            type: 'PUT',
            url: formApprovalUrl,
            //enctype: 'multipart/form-data',
             headers:t ,
            cache: false,
            processData: false,
            contentType: 'application/json',
            crossDomain: true,
            xhrFields: { withCredentials: true },
            beforeSend: function (xhr) { 
              console.log('setting credentials.......');
              console.log(this.headers);
           
            },
            success: function(data) { 
              console.log("=====Sent updated form41 to the database========");
              toastr.success("Success", 'Site status changed successfully');
             // window.location.href= '/cac/entrys-of-premise/' + this.entry_of_premise['idForm'] ;
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log("=====uploading system error ========");
            }
          } );

    }

}
