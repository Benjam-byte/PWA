import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TodoItem } from '../../todolist.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() data!: TodoItem;
  @Output() update = new EventEmitter<Partial<TodoItem>>();
  @Output() remove = new EventEmitter<TodoItem>();

  @ViewChild('newTextInput') newTextInput!: ElementRef<HTMLInputElement>;

  public labelValue: string = "";
  public isEditing: boolean = false;
  
  constructor() {

  }

  setEditing(e : boolean) {
    this.isEditing = e;
    if (e) {
      requestAnimationFrame(
        () => this.newTextInput.nativeElement.focus()
      );
    }
  }

  isDone(data : Partial<TodoItem>) {
    this.update.emit(data);
  }

  label(l : Partial<TodoItem>) {
    this.update.emit(l);
  }
  
  delete(data :TodoItem) {
    this.remove.emit(data);
  }

  ngOnInit(): void {
  }

}


