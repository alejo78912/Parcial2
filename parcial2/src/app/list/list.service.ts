import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../creditCard';
import { environment } from 'src/environment/environment';
import { Contants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  urlBase = environment.API_URL
  url= Contants.GET

  constructor(private http: HttpClient) { }

  getAllCards(){
    return this.http.get<any>(this.urlBase+this.url);
  }
}
