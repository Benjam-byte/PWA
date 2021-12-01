import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todolist.service';

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

  public labelValue: string = "";
  public isFocused: boolean = false;
  
  constructor() {

  }

  isDone(data : TodoItem) {
    var d : Partial<TodoItem> = { isDone: !data.isDone };
    this.update.emit(d);
  }

  label() {
    var l : Partial<TodoItem> = { label: this.labelValue };
    this.update.emit(l);
  }

  doubleclick() {
    console.log("mdrr");
  }
  
  delete(data :TodoItem) {
    this.remove.emit(data);
    console.log(data);
  }

  ngOnInit(): void {
  }

}

