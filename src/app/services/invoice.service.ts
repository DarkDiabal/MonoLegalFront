import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  urlBase: string;
  
  constructor(
    private http: HttpClient
  ) { 
    this.urlBase = environment.urlWebApi;
  }

  getInvoiceList(){
    const urlApi = `${environment.urlWebApi}Invoice`;
    return this.http.get(urlApi);
  }

  updateInvoice(model){
    const urlApi = `${environment.urlWebApi}Invoice`;
    return this.http.put(urlApi, model);
  }

}
