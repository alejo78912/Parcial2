import { Component } from '@angular/core';
import { CreditCard } from '../creditCard';
import {CreateService} from './create.service';
import { SwalUtils } from '../utils/swalUtils';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

   
  CreditCard: CreditCard =
  { titular: "",
    fecha: "",
    cvv: 0,
    numero: 0};

  constructor(private CreateService: CreateService) {}

  submitForm(): void {
   
      this.CreateService.addCreditCard(this.CreditCard).subscribe((data) => {
  
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