import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, IterableDiffers, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { Task } from '../models/card.model';
import { Column } from '../models/column.model';
import { ColumnService } from '../Service/column.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() column:Column;
  colTitle = ''
  control = new FormControl(this.colTitle);
  tasks:Task[];
  columnId: number;
  isAddTaskInputVisible: boolean = false;
  formGroup: FormGroup;
  newTaskTitle:string = '';
  addNewTaskFormGroup: FormGroup;
  newTaskTitleControl: string;
  iterableDiffer: any;

  constructor(private columnService: ColumnService,private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create(null);
}

ngDoCheck() {
  let changes = this.iterableDiffer.diff(this.tasks);
  if (changes) {
      console.log('Changes detected!');
      this.columnService.updateTasksListAfterDragDrop(this.columnId, this.tasks).subscribe(data => {
        console.log('date returned');
      });
  }
}
  

  ngOnInit(): void {
    this.addNewTaskFormGroup = new FormGroup({
      newTaskTitleControl : new FormControl('')
    });
    this.colTitle = this.column.title;
    this.tasks = this.column.tasks;
    this.columnId = this.column.colId;
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
    }
}

openAddTaskInput() {
  this.isAddTaskInputVisible = !this.isAddTaskInputVisible;
  console.log(this.isAddTaskInputVisible);
}

update() {
  if(this.control.value.trim().length !== 0) {
    console.log(this.control.value)
    this.colTitle = this.control.value;
  }
  
}

cancel() {
  this.control.setValue(this.colTitle);
}

onNewTaskInputEnter(){
  const taskTitle: string = this.addNewTaskFormGroup.get('newTaskTitleControl').value;
  if (taskTitle.trim().length > 0) {
    let task =  new Task();
    task.title = taskTitle;
    this.columnService.saveNewTask(taskTitle, this.columnId).subscribe(data => {
      this.tasks = data;
    }, error => {
      throwError(error);
    });
    this.isAddTaskInputVisible = false;
    this.addNewTaskFormGroup.reset();
  }

  
}

}
