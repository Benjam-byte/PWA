import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAcceuilComponent } from './todo-acceuil.component';

describe('TodoAcceuilComponent', () => {
  let component: TodoAcceuilComponent;
  let fixture: ComponentFixture<TodoAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
