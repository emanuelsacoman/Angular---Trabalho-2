import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService { 
  public array!: number[];

  constructor() {
    this.array = [];
  }

  getResultado(){
    return this.array;
  }

  setArray(resultado : number){
    return this.array.push(resultado);
  }
  
  getRandomNumber() {
    let min: number = 1;
    let max: number = 100;

    min = Math.ceil(min);
    max = Math.floor(max);
    let resultado = Math.floor(Math.random() * (max - min) + min);
    return resultado;
  }

}
