import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneNotebookService {

  constructor(private _http : HttpClient) { }

  getPhoneListFromDb(){
    return this._http.get('/api/phone-notebooks');
  }
}
