import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsGridComponent } from './boards-grid.component';

describe('BoardsGridComponent', () => {
  let component: BoardsGridComponent;
  let fixture: ComponentFixture<BoardsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
