import { Component } from '@angular/core';
import { CreditCard } from '../creditCard';
import {UpdateService} from './update.service';
import { SwalUtils } from '../utils/swalUtils';

@Component({
  selector: 'app-list',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent{

  CreditCard: CreditCard =
  { titular: "",
    fecha: "",
    cvv: 0,
    numero: 0};

  constructor(private UpdateService: UpdateService) {}

  submitForm(): void {
   
      this.UpdateService.Update(this.CreditCard).subscribe((data) => {
  
        this.CreditCard.titular="";
        this.CreditCard.fecha="";
        this.CreditCard.cvv=0;
        this.CreditCard.numero=0;
        SwalUtils.customMessageOk('Se','Gregó') 

        
        
      },(error)=>{
        SwalUtils.customMessageError(error, 'Se gregó')  
      });


      

}
}
