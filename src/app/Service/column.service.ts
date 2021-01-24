import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/card.model';
import { Column } from '../models/column.model';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  baseUrl = environment.baseUrl;
  
  constructor(private httpClient:HttpClient) { }

  createNewColumnForBoard(boardId: number): Observable<Column[]> {
    return this.httpClient.post<Column[]>(this.baseUrl + 'api/board/' + boardId + '/add-column', null);
  }

  saveNewTask(taskTitle: string, columnId: number) : Observable<Task[]>{
    return this.httpClient.post<Task[]>(this.baseUrl + 'api/column/' + columnId + '/add-task', taskTitle);
  }

}
