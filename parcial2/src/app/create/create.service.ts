import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Contants } from '../constants/constants';
import { Observable } from 'rxjs';
import { CreditCard } from '../creditCard';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  urlBase = environment.API_URL
  url= Contants.SAVE

  constructor(private http: HttpClient) {}

  addCreditCard(CreditCard: CreditCard): Observable<CreditCard> {
    return this.http.post<CreditCard>(this.urlBase+this.url, CreditCard);
  }
}
