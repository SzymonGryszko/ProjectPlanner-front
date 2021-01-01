import { Component, OnInit, ViewChild } from '@angular/core';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { ColumnComponent } from '../column/column.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @ViewChild('col')(ColumnComponent) col:ColumnComponent;
  value = Board.name;
  control = new FormControl(this.value);

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Column('Research', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);


  ngOnInit(): void {
  }

  update() {
    this.value = this.control.value;
  }

  cancel() {
    this.control.setValue(this.value);
  }


}
