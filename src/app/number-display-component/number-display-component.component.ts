import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-number-display-component',
  templateUrl: './number-display-component.component.html',
  styleUrls: ['./number-display-component.component.css']
})
export class NumberDisplayComponentComponent implements OnInit {
  public randomNumber: number[] = [];

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.createNumber(); // Chama a função para criar o número aleatório ao inicializar o componente
  }
  
  createNumber() {
    this.dataService.getRandomNumber(); // Gera o número aleatório
    this.randomNumber = this.dataService.getResultado(); // Atribui o resultado ao array randomNumber
    console.log(this.randomNumber); // Imprime o array com o número aleatório
  }
}
