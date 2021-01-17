import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../Service/boards.service';

@Component({
  selector: 'app-boards-grid',
  templateUrl: './boards-grid.component.html',
  styleUrls: ['./boards-grid.component.css']
})
export class BoardsGridComponent implements OnInit {
  numbers: number[];

  constructor(private boardsService: BoardsService) { 
    this.numbers = Array(10).fill(1);
    console.log(this.boardsService.getAllBoardsPerUserId(1));
  }

  ngOnInit(): void {
    
  }

}
