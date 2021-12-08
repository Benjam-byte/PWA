import { Component, Input, OnInit } from '@angular/core';
import { TodoItem, TodoList } from '../todolist.service';

@Component({
  selector: 'app-todo-viz',
  templateUrl: './todo-viz.component.html',
  styleUrls: ['./todo-viz.component.scss']
})
export class TodoVizComponent implements OnInit {

  @Input() data!: TodoList;

  constructor() { }

  ngOnInit(): void {
  }

  nbItemRestant(tdlItem:  readonly TodoItem[]): number{
    var rest: number = 0;
    for (var i: number = 0; i < tdlItem.length; i++){
      if (!tdlItem[i].isDone) {
        rest = rest + 1;
      }
    }
    return rest;
  }

}
