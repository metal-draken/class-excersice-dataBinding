import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  oddElements = []


  constructor() { }

  ngOnInit(): void {
  }

}
