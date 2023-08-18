import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService { 
  private array: number[] = [];

  constructor() { }
  
  getResultado(): number[] {
    return this.array;
  }
  
  setArray(result: number): void {
    this.array.push(result);
  }
  
  getRandomNumber(): number {
    //fórmula fornecida pelo chat gpt
    
    const min: number = 1;
    const max: number = 100;

    const result: number = Math.floor(Math.random() * (max - min + 1) + min);
    this.setArray(result);
    return result;
  }
}
