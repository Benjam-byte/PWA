import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoVizComponent } from './todo-viz.component';

describe('TodoVizComponent', () => {
  let component: TodoVizComponent;
  let fixture: ComponentFixture<TodoVizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoVizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
