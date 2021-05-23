import { Component, OnInit } from '@angular/core';
import { PhoneNotebookService } from '../phone-notebook.service';

@Component({
  selector: 'app-phone-notebook',
  templateUrl: './phone-notebook.component.html',
  styleUrls: ['./phone-notebook.component.css']
})
export class PhoneNotebookComponent implements OnInit {
columnDefs = [
       { field: 'Id', sortable: true, filter: false },
       { field: 'Name', sortable: true, filter: true },
       { field: 'Phone', sortable: false, filter: true }
   ];
   rowData : any;
  constructor(private _phoneService : PhoneNotebookService) { }

  ngOnInit(): void {
   this.getDataFromAPI();
  }

 getDataFromAPI(){
   this._phoneService.getPhoneListFromDb().subscribe((response)=>{
     console.log('Get Data Successfully');
    this.rowData=response;
   },
   (error)=>{
      console.log('Error is '+ error);
   }
  )
  }
}
