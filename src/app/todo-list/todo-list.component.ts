import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem, TodoList, TodolistService } from '../todolist.service';

type FctFilter = (item: TodoItem) => boolean;


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  public searchValue: string = '';
  public filterAll: FctFilter = function (item: TodoItem) {
    return true;
  }

  public filter: FctFilter = this.filterAll;

  public filterAct: FctFilter= function (item: TodoItem) {
    return !item.isDone;
  };
  public filterCom: FctFilter= function (item: TodoItem) {
    return item.isDone;
  };;

    constructor(private _todolistService: TodolistService) { 
  }

  get obsToDoList(): Observable<TodoList> {
    return this._todolistService.observable;
  }

  undo() {
    this._todolistService.undo();
  }

  redo() {
    this._todolistService.redo();
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
  
  ngOnInit(): void {
  }

  selectAll(p :Partial<TodoItem>) {
    
  }
  
  remove(...item: Readonly<TodoItem[]>) {
    console.log(item);
    this._todolistService.remove(...item);
    console.log("je remove");
  }

  updateLabel(label: string, item: Readonly<TodoItem>,) {
    console.log(label);
    var t: Partial<TodoItem> = { label: label };
    this._todolistService.update(t,item);
  }

  updateDone(isDone: boolean, item: Readonly<TodoItem>,) {
    var d : Partial<TodoItem> = { isDone: isDone };
    this._todolistService.update(d,item);
  }

  update(item:Partial<TodoItem>, item2: Readonly<TodoItem>) {
    this._todolistService.update(item, item2);
  }

  append(label: string): void{
    this._todolistService.append(label);
    this.searchValue = '';
  }


}
