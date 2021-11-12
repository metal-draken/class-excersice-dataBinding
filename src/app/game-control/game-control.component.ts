import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numbers = new EventEmitter<number>();
  numbersArray=[]
  intervalStatus: any

  constructor() { }

  gameOutput: string[]=[]

  ngOnInit(): void {
  }


  onStartButton() {
    this.intervalStatus = setInterval(() => this.createNumbers() , 1000)
  }

  onStopButton() {
   clearInterval(this.intervalStatus);
  }

  createNumbers() {
    this.numbersArray.push(this.numbersArray.length + 1);
    console.log(this.numbersArray.length);
    this.numbers.emit(this.numbersArray.length + 1);
  }

}

/* this.numbers.emit({"1"}) */
