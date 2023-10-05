import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Contants } from '../constants/constants';
import { Observable } from 'rxjs';
import { CreditCard } from '../creditCard';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  urlBase = environment.API_URL
  url= Contants.UPDATE

  constructor(private http: HttpClient) {
  }

  Update(CreditCard:CreditCard){
    const options = {
      headers: {
        'content-type': 'application/json',
      
      }
    }
      let json = JSON.stringify(CreditCard)
      return this.http.put<CreditCard>(this.urlBase+this.url, options)
    
  }
}
  


  


