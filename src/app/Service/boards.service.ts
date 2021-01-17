import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient:HttpClient) { }

  getAllBoardsPerUserId(userId: number): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.baseUrl + 'api/boards/' +userId);
  }

  getBoardById(boardId: number): Observable<Board>{
    return this.httpClient.get<Board>(this.baseUrl + 'api/board/' + boardId);
  }
}
