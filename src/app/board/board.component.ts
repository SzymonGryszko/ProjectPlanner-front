import { Component, OnInit, ViewChild } from '@angular/core';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { ColumnComponent } from '../column/column.component';
import { FormControl, Validators } from '@angular/forms';
import { BoardsService } from '../Service/boards.service';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @ViewChild('col')(ColumnComponent) col:ColumnComponent;
  value = Board.name;
  control = new FormControl(this.value);

  constructor(private boardsService: BoardsService, private activatedRoute: ActivatedRoute) { }

  board: Board;
  boardId: number;

  ngOnInit(): void {
    this.boardId = this.activatedRoute.snapshot.params.id;
    this.boardsService.getBoardById(this.boardId).subscribe(data => {
      this.board = data;
    }, error => {
      throwError(error);
    });
  }

  update() {
    this.value = this.control.value;
  }

  cancel() {
    this.control.setValue(this.value);
  }


}
