import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards-grid',
  templateUrl: './boards-grid.component.html',
  styleUrls: ['./boards-grid.component.css']
})
export class BoardsGridComponent implements OnInit {
  numbers: number[];

  constructor() { 
    this.numbers = Array(10).fill(1);
  }

  ngOnInit(): void {
  }

}
