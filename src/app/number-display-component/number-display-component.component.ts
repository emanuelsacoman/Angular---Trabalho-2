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
  //chat gpt me ensinou a usar o ngOnInit()

  ngOnInit() {
    this.createNumber();
  }
  
  createNumber() {
    this.dataService.getRandomNumber();
    this.randomNumber = this.dataService.getResultado();
    console.log(this.randomNumber);
  }
}
