import { Component, OnInit, ViewChild } from '@angular/core';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { ColumnComponent } from '../column/column.component';
import { FormControl, Validators } from '@angular/forms';
import { BoardsService } from '../Service/boards.service';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { ColumnService } from '../Service/column.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @ViewChild('col')(ColumnComponent) col:ColumnComponent;
  value = '';
  control = new FormControl(this.value);
  columns: Column[];
  board: Board;
  boardId: number;

  constructor(private boardsService: BoardsService, private activatedRoute: ActivatedRoute,
    private columnService: ColumnService) { }

  

  ngOnInit(): void {
    this.boardId = this.activatedRoute.snapshot.params.id;
    this.boardsService.getBoardById(this.boardId).subscribe(data => {
      this.board = data;
      this.value = this.board.title;
      this.columns = this.board.columns;
    }, error => {
      throwError(error);
    });
  }

  updateBoardTitle() {
    if(this.control.value.trim().length !== 0) {
      this.value = this.control.value;
    }
  }

  cancelUpdateBoardTitle() {
    this.control.setValue(this.value);
  }

  addNewColumn() {
    this.columnService.createNewColumnForBoard(this.boardId).subscribe(data => {
      this.columns = data;
    }, error => {
      throwError(error);
    });
  }


}
