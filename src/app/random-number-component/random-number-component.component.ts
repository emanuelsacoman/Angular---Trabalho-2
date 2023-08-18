import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-random-number-component',
  templateUrl: './random-number-component.component.html',
  styleUrls: ['./random-number-component.component.css']
})

export class RandomNumberComponentComponent {
  public isSendMessage: boolean = false;

  constructor(private dataService: DataServiceService) {}

  sendMessage() {
    this.dataService.getRandomNumber(); // Chama o método para gerar um número aleatório
    console.log(this.dataService.getResultado()); // Imprime o resultado
  }
}
