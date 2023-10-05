import { Injectable } from '@angular/core';
import { Contants } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  urlBase = environment.API_URL
  url= Contants.VALIDATE_WITH_LOGIN
  
  constructor(private http: HttpClient) {
    
  }

  login(login:Login) {
    const options = {
      headers: {
        'content-type': 'application/json',
      
      }
    }
    let json = JSON.stringify(login)
    return this.http.post<any>(this.urlBase+this.url,json,options)
  }
}
