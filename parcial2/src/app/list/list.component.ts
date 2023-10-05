import { Component } from '@angular/core';
import { CreditCard } from '../creditCard';
import { ListService } from './list.service';
import { SwalUtils } from '../utils/swalUtils';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  tarjetas: CreditCard[] = [];

  constructor(private listService: ListService) { }



  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
      this.listService.getAllCards().subscribe((res) => {
      console.log(res);
      if (res?.tarjetas) {
      this.tarjetas = res.tarjetas
      console. log(this.tarjetas);
      } else {
      SwalUtils. customMessageError ("Error", "No se encontratron datos")
      }
    }, (error: any) => {
      console. log (error);
      SwalUtils. customMessageError ("Error", "Error al consultar los datos")
  })
      }
    }
  

