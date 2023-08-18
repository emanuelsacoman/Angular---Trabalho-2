import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService { 
  private array: number[] = []; // Altere para "private" para encapsular o array

  constructor() {
    // Não é necessário inicializar o array vazio aqui, já que foi inicializado acima
  }
  
  getResultado(): number[] {
    return this.array;
  }
  
  setArray(resultado: number): void {
    this.array.push(resultado); // Não é necessário retornar o push
  }
  
  getRandomNumber(): number {
    const min: number = 1; // Use "const" para declarar constantes
    const max: number = 100;

    const resultado: number = Math.floor(Math.random() * (max - min + 1) + min); // Corrija o cálculo para incluir o número máximo
    this.setArray(resultado); // Adicione o resultado ao array usando o método setArray
    return resultado;
  }
}
