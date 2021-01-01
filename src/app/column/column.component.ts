import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() tasks:string[];
  isAddCardInputVisible: boolean = false;
  value = 'Title'
  control = new FormControl(this.value);
  formGroup: FormGroup;
  newCardTitle:string = '';
  addNewCardFormGroup: FormGroup;
  newCardTitleControl: string;

  constructor() {

   }

  ngOnInit(): void {
    this.addNewCardFormGroup = new FormGroup({
      newCardTitleControl : new FormControl('')
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(event.previousContainer === event.container)
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
    }
}

openAddTaskInput() {
  this.isAddCardInputVisible = !this.isAddCardInputVisible;
  console.log(this.isAddCardInputVisible);
}

update() {
  this.value = this.control.value;
}

cancel() {
  this.control.setValue(this.value);
}

onNewCardInputEnter(){
  this.tasks.push(this.addNewCardFormGroup.get('newCardTitleControl').value);
  this.isAddCardInputVisible = false;
  this.addNewCardFormGroup.reset();
  
}

}
